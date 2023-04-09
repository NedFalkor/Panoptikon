import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureImageComponent } from './capture-image/capture-image.component';
import { WebcamModule } from 'ngx-webcam';


@NgModule({
  declarations: [
    CaptureImageComponent,
  ],
  imports: [
    CommonModule,
    WebcamModule
  ]
})
export class AccountModule { }