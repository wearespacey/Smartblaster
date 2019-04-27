import {Component, OnInit} from '@angular/core';
import ParticlesConfig from './../assets/data/particles.json';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SmartBlasterUI';

  ngOnInit() {
    particlesJS('particles-js', ParticlesConfig, () => {
      console.log('callback - particles.js config loaded');
    });
  }
}
