import { Component, OnInit } from '@angular/core';
import ParticlesConfig from './../assets/data/particles.json';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { SignalRService } from './services/signal-r.service';
import { map as __map, filter as __filter } from 'rxjs/operators';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { trigger, style, animate, transition } from '@angular/animations'

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideOutToLeft', [
      transition('void => *', [
        // 'From' Style
        style({ transform: 'translateX(0%)' }),
        animate('1500ms ease-in',
            // 'To' Style
            style({ transform: 'translateX(-100%)' }),
        )
      ])
    ]),
    trigger('slideOutToRight', [
      transition('void => *', [
        // 'From' Style
        style({ transform: 'translateX(0%)' }),
        animate('1500ms ease-in',
            // 'To' Style
            style({ transform: 'translateX(100%)' }),
        )
      ])
    ]),
  ]
})
export class AppComponent implements OnInit {
  loaderMessage: any;
  isAnimating: boolean;


  ngOnInit() {
    this.loaderMessage = 'Détection de votre identité...';
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 1500);
    particlesJS('particles-js', ParticlesConfig, () => {
      console.log('callback - particles.js config loaded');
    });
    this.signalRService.startConnection();
    this.callCam().toPromise();
  }

  constructor(
    public signalRService: SignalRService,
    private http: HttpClient
  ) {}

  // http://10.100.2.163:6500/api/Cam/snap
  callCam() {
    const __headers = new HttpHeaders();
    const req = new HttpRequest<any>(
      'POST',
      `https://localhost:44399/api/Cam/snap`,
      [],
      {
        headers: __headers,
        responseType: 'json'
      }
    );

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map(_r => {
        return _r as __StrictHttpResponse<{ image: Blob }>;
      })
    );
  }
}
