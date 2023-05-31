import { Component, ViewChild, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnDestroy {

  // @ViewChild('videoPreview') videoPreview!: HTMLVideoElement;
  // @ViewChild('startRecording') startRecordingButton!: HTMLButtonElement;
  // @ViewChild('recordTimer') recordTimer!: HTMLSpanElement;
  // @ViewChild('messageElement') messageElement!: HTMLDivElement;

  // mediaRecorder!: MediaRecorder;
  // recordedChunks: Blob[] = [];
  // isRecording = false;
  // isTimerRunning = false;
  // remainingTime = 30;
  // showWebcamFlag = false;
  // selectedFile!: File;

  // constructor(private videoService: VideoService) { }

  // ngAfterViewInit() {
  //   // this.videoPreview.setAttribute('autoplay', 'true');
  //   navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  //     .then(stream => {
  //       console.log(stream)
  //       this.videoPreview.srcObject = stream;
  //       this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=h264' });
  //       this.mediaRecorder.ondataavailable = event => {
  //         this.recordedChunks.push(event.data);
  //       };
  //       this.mediaRecorder.onstop = () => {
  //         const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
  //         const videoFile = new File([blob], 'recorded-video.webm');
  //         console.log('Video file:', videoFile);
  //         this.videoService.uploadVideo(videoFile, 'recorded-video', 'My recorded video')
  //           .subscribe(result => {
  //             console.log(result);
  //           });
  //       };
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  // onFileSelected(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     this.selectedFile = input.files[0];
  //   }
  // }

  // showWebcam() {
  //   this.showWebcamFlag = true;
  //   navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  //     .then(stream => {
  //       this.videoPreview.srcObject = stream;
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //   if (this.startRecordingButton) {
  //     this.startRecordingButton.classList.remove('d-none');
  //   }
  //   document.querySelector('#webcam-window')?.classList.remove('d-none');
  // }

  // startRecording() {
  //   this.isRecording = true;
  //   this.isTimerRunning = true;
  //   this.recordedChunks = [];
  //   this.mediaRecorder.start();
  //   this.startRecordingButton.classList.add('d-none');
  //   this.recordTimer.classList.remove('d-none');
  //   this.updateTimer();
  // }

  // stopRecording() {
  //   if (this.isRecording) {
  //     this.isRecording = false;
  //     this.isTimerRunning = false;
  //     this.mediaRecorder.stop();
  //     const stream = this.videoPreview.srcObject as MediaStream;
  //     const tracks = stream.getTracks();
  //     tracks.forEach(track => track.stop());

  //     this.startRecordingButton.classList.remove('d-none');
  //     this.recordTimer.classList.add('d-none');
  //     this.messageElement.innerText = 'Video terminée';
  //     this.remainingTime = 30;
  //   }
  // }

  // updateTimer() {
  //   setTimeout(() => {
  //     if (this.isTimerRunning) {
  //       this.remainingTime--;
  //       if (this.remainingTime <= 0) {
  //         this.stopRecording();
  //       } else {
  //         const hours = Math.floor(this.remainingTime / 3600);
  //         const minutes = Math.floor((this.remainingTime % 3600) / 60);
  //         const seconds = this.remainingTime % 60;
  //         const milliseconds = (this.remainingTime % 1) * 1000;
  //         const timerString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
  //         this.recordTimer.innerText = timerString;
  //         this.updateTimer();
  //       }
  //     }
  //   }, 1);
  // }

   ngOnDestroy() {
     if (this.mediaRecorder) {
      this.mediaRecorder.stop();
    }
  }

  @ViewChild('recordedVideo') recordVideoElementRef?: ElementRef;
  @ViewChild('video') videoElementRef?: ElementRef;

  videoElement?: HTMLVideoElement;
  recordVideoElement?: HTMLVideoElement;
  mediaRecorder: any;
  recordedBlobs?: Blob[];
  isRecording: boolean = false;
  downloadUrl?: string;
  stream?: MediaStream;
  remainingTime = 30;
  showWebcamFlag = false;

  constructor() {}

  async ngOnInit() {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 360
        },
        audio: true
      })
      .then(stream => {
        this.videoElement = this.videoElementRef?.nativeElement;
        this.recordVideoElement = this.recordVideoElementRef?.nativeElement;

        this.stream = stream;
        this.videoElement!.srcObject = this.stream;
      });
  }

  toggleWebcam() {
    this.showWebcamFlag = !this.showWebcamFlag;
  }

  startRecording() {
    this.recordedBlobs = [];
    let options: any = { mimeType: 'video/webm;codecs=vp9,opus' };
    
    try {
      this.mediaRecorder = new MediaRecorder(this.stream!, options);
    } catch (err) {
      console.log(err);
    }
    
    this.mediaRecorder.start();
    this.isRecording = !this.isRecording;
    this.onDataAvailableEvent();
    this.onStopRecordingEvent();
  }

  stopRecording() {
    this.mediaRecorder.stop();
    this.isRecording = !this.isRecording;
    console.log('Recorded Blobs: ', this.recordedBlobs);
  }

  playRecording() {
    if (!this.recordedBlobs || !this.recordedBlobs.length) {
      console.log('cannot play.');
      return;
    }
    this.recordVideoElement!.play();
  }

  onDataAvailableEvent() {
    try {
      this.mediaRecorder.ondataavailable = (event: any) => {
        if (event.data && event.data.size > 0) {
          this.recordedBlobs!.push(event.data);
        }
      };
    } catch (error) {
      console.log(error);
    }
  }

  onStopRecordingEvent() {
    try {
      this.mediaRecorder.onstop = (event: Event) => {
        const videoBuffer = new Blob(this.recordedBlobs, {
          type: 'video/webm;codecs=vp9,opus'
        });        
        this.downloadUrl = window.URL.createObjectURL(videoBuffer);
        this.recordVideoElement!.src = this.downloadUrl;
      };
    } catch (error) {
      console.log(error);
    }
  }
}