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
import { trigger, style, animate, transition } from '@angular/animations';
import { Subject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';
import { CustomVisionPredictionService } from '@oneroomic/facecognitivelibrary';
import { API_KEYS } from 'src/api-keys.js';

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
        animate(
          '1500ms ease-in',
          // 'To' Style
          style({ transform: 'translateX(-100%)' })
        )
      ])
    ]),
    trigger('slideOutToRight', [
      transition('void => *', [
        // 'From' Style
        style({ transform: 'translateX(0%)' }),
        animate(
          '1500ms ease-in',
          // 'To' Style
          style({ transform: 'translateX(100%)' })
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  triggerSnapshot: Subject<void> = new Subject<void>();
  loaderMessage: any;
  isAnimating: boolean;
  headers: HttpHeaders;
  humanProbabilities: number[] = [];
  isHuman: boolean;
  interval: NodeJS.Timer;

  constructor(
    public signalRService: SignalRService,
    private http: HttpClient,
    private faceService: CustomVisionPredictionService
  ) {
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': '*'
    });
  }

  ngOnInit() {
    this.loaderMessage = 'Détection de votre identité...';
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
      this.interval = setInterval(() => {
        this.takeSnapshot();
      }, 1000);
    }, 1500);
    particlesJS('particles-js', ParticlesConfig, () => {
      console.log('callback - particles.js config loaded');
    });
    // this.signalRService.startConnection();
  }

  takeSnapshot() {
    this.triggerSnapshot.next();
  }

  async capturedImage(event: WebcamImage) {
    // TODO  hardcoded keys
    const predictions: any = await this.predictImage(
      this.b64toBlob(event.imageAsBase64),
      API_KEYS['endpoint'],
      API_KEYS['key'],
      API_KEYS['projectId'],
      API_KEYS['publishedName']
    ).toPromise();
    if (predictions) {
      const humanPrediction: number = predictions.predictions.find(
        p => p.tagName === 'humans'
      ).probability;
      if (this.humanProbabilities.length < 3) {
        this.humanProbabilities.push(humanPrediction);
      } else {
        clearInterval(this.interval);
        const globalHumanProb =
          (this.humanProbabilities[0] +
            this.humanProbabilities[1] +
            this.humanProbabilities[2]) /
          3;
        this.isHuman = globalHumanProb >= 0.8;
      }
    }
  }

  predictImage = (stream, endpoint, key, projectId, publishedName) => {
    let url;
    let h = this.headers.set('Content-Type', 'application/octet-stream');
    h = this.headers.set('Prediction-Key', key);
    url =
      endpoint +
      '/' +
      projectId +
      '/classify/iterations/' +
      publishedName +
      '/image';
    return this.http.post(url, stream, { headers: h });
  }

  b64toBlob(b64Data: string, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
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
