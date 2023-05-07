import { Component, ViewChild, OnDestroy } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnDestroy {

  @ViewChild('videoPreview') videoPreview!: HTMLVideoElement;
  @ViewChild('startRecording') startRecordingButton!: HTMLButtonElement;
  @ViewChild('recordTimer') recordTimer!: HTMLSpanElement;
  @ViewChild('messageElement') messageElement!: HTMLDivElement;

  mediaRecorder!: MediaRecorder;
  recordedChunks: Blob[] = [];
  isRecording = false;
  isTimerRunning = false;
  remainingTime = 30;
  showWebcamFlag = false;
  selectedFile!: File;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoPreview.setAttribute('autoplay', 'true');
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        this.videoPreview.srcObject = stream;
        this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=h264' });
        this.mediaRecorder.ondataavailable = event => {
          this.recordedChunks.push(event.data);
        };
        this.mediaRecorder.onstop = () => {
          const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
          const videoFile = new File([blob], 'recorded-video.webm');
          console.log('Video file:', videoFile);
          this.videoService.uploadVideo(videoFile, 'recorded-video', 'My recorded video')
            .subscribe(result => {
              console.log(result);
            });
        };
      })
      .catch(error => {
        console.error(error);
      });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  showWebcam() {
    this.showWebcamFlag = true;
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        this.videoPreview.srcObject = stream;
      })
      .catch(error => {
        console.error(error);
      });
    if (this.startRecordingButton) {
      this.startRecordingButton.classList.remove('d-none');
    }
    document.querySelector('#webcam-window')?.classList.remove('d-none');
  }


  startRecording() {
    this.isRecording = true;
    this.isTimerRunning = true;
    this.recordedChunks = [];
    this.mediaRecorder.start();
    this.startRecordingButton.classList.add('d-none');
    this.recordTimer.classList.remove('d-none');
    this.updateTimer();
  }

  stopRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.isTimerRunning = false;
      this.mediaRecorder.stop();
      const stream = this.videoPreview.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());

      this.startRecordingButton.classList.remove('d-none');
      this.recordTimer.classList.add('d-none');
      this.messageElement.innerText = 'Video terminée';
      this.remainingTime = 30;
    }
  }

  updateTimer() {
    setTimeout(() => {
      if (this.isTimerRunning) {
        this.remainingTime--;
        if (this.remainingTime <= 0) {
          this.stopRecording();
        } else {
          this.updateTimer();
        }
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
    }
    const stream = this.videoPreview.srcObject as MediaStream;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
  }
}
