import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent {

  queryParams: any;
  timerInterval: any;

  ngxWebRTCClient: any;
  mediaRecorder!: MediaRecorder;
  recordedChunks: Blob[] = [];

  @ViewChild('videoForm') form!: HTMLFormElement;

  constructor(
    private activatedRoute: ActivatedRoute,
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.ngxWebRTCClient = this.createClient({
      debug: false
    });
    if (this.ngxWebRTCClient) {
      this.ngxWebRTCClient.getUserMedia({ video: true })
        .then((stream: MediaStream) => {
          const videoElement = document.getElementById('video-preview') as HTMLVideoElement;
          videoElement.srcObject = stream;
          videoElement.play();
          this.mediaRecorder = new MediaRecorder(stream);
          this.mediaRecorder.ondataavailable = event => {
            this.recordedChunks.push(event.data);
          };
          this.mediaRecorder.onstop = () => {
            const blob = new Blob(this.recordedChunks, { type: 'video/mp4' });
            const videoFile = new File([blob], 'webcam-video.mp4');
            console.log('Video file:', videoFile);

            const formData = new FormData();
            formData.append('file', videoFile);
            formData.append('name', 'webcam-video');
            formData.append('description', 'Vidéo capturée dans le PanOptikon');
            this.videoService.uploadVideo(videoFile, 'webcam-video', 'Vidéo capturée dans le PanOptikon')
              .subscribe(result => {
                console.log(result);
              });
          };
        })
        .catch((error: any) => {
          console.error(error);
        });
    }

    this.activatedRoute.queryParams.subscribe(params => {
      this.queryParams = params;
    });

    this.startWebcam();
  }

  createClient(options: any): any {
    // replace with appropriate code
  }

  startWebcam() {
    const videoPreview = document.getElementById('video-preview') as HTMLVideoElement;
    const startRecordingButton = document.getElementById('start-recording') as HTMLButtonElement;
    const stopRecordingButton = document.getElementById('stop-recording') as HTMLButtonElement;
    const webcamWindow = document.getElementById('webcam-window') as HTMLElement;

    if (webcamWindow !== null) {
      webcamWindow.classList.remove('d-none');
    }

    videoPreview.setAttribute('autoplay', 'true');
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoPreview.srcObject = stream;
      })
      .catch(error => {
        console.error(error);
      });


    startRecordingButton.addEventListener('click', () => {
      this.startRecording();
      startRecordingButton.classList.add('d-none');
      stopRecordingButton.classList.remove('d-none');
    });

    const recordTimer = document.getElementById('record-timer') as HTMLSpanElement;
    let seconds = 0;
    this.timerInterval = setInterval(() => {
      seconds++;
      recordTimer.innerText = seconds.toString();
    }, 1000);


    stopRecordingButton.addEventListener('click', () => {
      this.stopRecording();
      stopRecordingButton.classList.add('d-none');
      startRecordingButton.classList.remove('d-none');
    });
  }

  startRecording() {
    this.recordedChunks = [];
    this.mediaRecorder.start();
  }

  stopRecording() {

    this.mediaRecorder.stop();

    const videoPreview = document.getElementById('video-preview') as HTMLVideoElement;
    const stream = videoPreview.srcObject as MediaStream;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());

    this.recordedChunks = [];
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
    const fileInput = this.form.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput !== null) {
      const file = fileInput.files![0];
    }
  }

}