import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { Picture } from 'src/app/interfaces/picture';

@Component({
  selector: 'app-capture-image',
  templateUrl: './capture-image.component.html',
  styleUrls: ['./capture-image.component.scss']
})
export class CaptureImageComponent implements OnInit {

  private trigger: Subject<Picture> = new Subject();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<Picture> = new Subject();
  sysImage = '';
  imageCaptured = false;

  ngOnInit() {}

  public getSnapshot(): void {
    const emptyPicture: Picture = {
      id: 0,
      data: new ArrayBuffer(0),
      pictureName: '',
      contentType: ''
    };
    this.trigger.next(emptyPicture);
    this.imageCaptured = true;
  }
  

  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    console.info('got webcam image', this.sysImage);
  }

  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

}