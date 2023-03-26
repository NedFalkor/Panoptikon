import { Component, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxWebrtcUser } from 'ngx-webrtc';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent {

  queryParams: any;

  ngxWebRTCClient: any;
  mediaRecorder!: MediaRecorder;
  recordedChunks: Blob[] = [];

  @ViewChild('videoForm') form!: HTMLFormElement;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngxWebRTCUser: NgxWebrtcUser 
  ) { }

  ngOnInit() {
    this.ngxWebRTCClient = this.ngxWebRTCUser['createClient']({
      debug: false
    });
    this.ngxWebRTCClient.getUserMedia({ video: true })
      .then((stream: MediaStream) => {
        const videoElement = document.getElementById('video-preview') as HTMLVideoElement;
        videoElement.srcObject = stream;
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.ondataavailable = event => {
          this.recordedChunks.push(event.data);
        };
        this.mediaRecorder.onstop = () => {
          const blob = new Blob(this.recordedChunks, { type: 'video/mp4' });
          const videoFile = new File([blob], 'webcam-video.mp4');
          console.log('Video file:', videoFile);
        };
      })
      .catch(error => {
        console.error(error);
      });

    this.activatedRoute.queryParams.subscribe(params => {
      this.queryParams = params;
    });
  }

  startRecording(): void {
    this.recordedChunks = [];
    this.mediaRecorder.start();
  }

  stopRecording(): void {
    this.mediaRecorder.stop();
  }

  ngAfterViewInit(): void {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      let data = new FormData(this.form);

      fetch('http://localhost:8080/video', {
        method: 'POST',
        body: data
      })
        .then(result => result.text())
        .then(_ => {
          window.location.reload();
        });
    });
    const fileInput = this.form.querySelector('input[type="file"]');
    if (fileInput !== null) {
      const file = fileInput.files![0];
      const fileURL = URL.createObjectURL(file);
    }
  }
}

