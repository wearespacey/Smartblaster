import {Component, OnInit} from '@angular/core';
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
  }
  constructor(
    public signalRService: SignalRService,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.signalRService.startConnection();
  }
  public chartClicked = event => {
    console.log(event);
    this.signalRService.broadcastChartData({
      ForwarBackward: 'F',
      RightLeft: null
    });
  };
}
