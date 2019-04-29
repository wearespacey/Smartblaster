import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { MovementModel } from '../_interfaces/movementmodel.model';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data: MovementModel[];
  public bradcastedData: MovementModel[];

  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:44399/chart')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public addTransferChartDataListener = () => {
    this.hubConnection.on('transferchartdata', data => {
      this.data = data;
    });
  }

  public broadcastMovementData = (movemment: MovementModel) => {
    this.hubConnection
      .invoke('broadcastmovementdata', movemment)
      .catch(err => console.error(err));
  }

  public broadcastStop = () => {
    this.hubConnection
      .invoke('broadcaststop', null)
      .catch(err => console.error(err));
  }

  public addBroadcastChartDataListener = () => {
    this.hubConnection.on('broadcastmovementdata', data => {
      this.bradcastedData = data;
    });
  }
}
