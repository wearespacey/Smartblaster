import { Component, OnInit } from '@angular/core';
import ParticlesConfig from './../assets/data/particles.json';
import { HttpClient } from '@angular/common/http';
import { SignalRService } from './services/signal-r.service';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    particlesJS('particles-js', ParticlesConfig, () => {
      console.log('callback - particles.js config loaded');
    });
    this.signalRService.startConnection();
  }

  constructor(
    public signalRService: SignalRService,
    private http: HttpClient
  ) {}

  public btnClicked = (FBDirection: string, RLDirection: string) => {
    this.signalRService.broadcastMovementData({
      ForwarBackward: FBDirection,
      RightLeft: RLDirection
    });
  };

  public onOffClicked = () => {
    this.signalRService.broadcastStop();
  };
}
