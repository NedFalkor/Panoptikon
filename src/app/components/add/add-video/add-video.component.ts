import { Component, ViewChild, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnDestroy {

  ngOnDestroy() {
    if (this.mediaRecorder) {
     this.mediaRecorder.stop();
   }
 }

 @ViewChild('recordedVideo') recordVideoElementRef?: ElementRef;
 @ViewChild('video') videoElementRef?: ElementRef;

 videoElement?: HTMLVideoElement;
 recordVideoElement?: HTMLVideoElement;
 mediaRecorder?: MediaRecorder;
 recordedBlobs?: Blob[];
 isRecording: boolean = false;
 downloadUrl?: string;
 stream?: MediaStream;
 remainingTime = 30;
 showWebcamFlag = false;
 isDarkMode: boolean = false;


 constructor(
  private videoService: VideoService
 ) {}

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

 toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
}

 startRecording() {
   this.recordedBlobs = [];
   let options: any = { mimeType: 'video/webm' };
   
   try {
     this.mediaRecorder = new MediaRecorder(this.stream!, options);
   } catch (err) {
     console.log(err);
   }
   console.log(this.recordedBlobs)
   this.mediaRecorder?.start();
   this.isRecording = !this.isRecording;
   this.onDataAvailableEvent();
   this.onStopRecordingEvent();
 }

 stopRecording() {
   this.mediaRecorder?.stop();
   this.isRecording = !this.isRecording;
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
     this.mediaRecorder!.ondataavailable = (event: any) => {
      console.log(event)
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
     this.mediaRecorder!.onstop = (event: Event) => {
      console.log(event);
       const videoBuffer = new Blob(this.recordedBlobs, {
         type: 'video/webm'
       });        
       this.downloadUrl = window.URL.createObjectURL(videoBuffer);
       this.recordVideoElement!.src = this.downloadUrl;
       console.log('Recorded Blobs: ', this.recordedBlobs);
   this.videoService.uploadVideo(this.recordedBlobs!, { title: 'test', description: 'test' }).subscribe();
     };
   } catch (error) {
     console.log(error);
   }
 }

}