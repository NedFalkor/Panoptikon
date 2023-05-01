import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxWebrtcModule } from 'ngx-webrtc';
import { AddVideoComponent } from './add-video/add-video.component';

@NgModule({
  declarations: [AddVideoComponent],
  imports: [CommonModule, NgxWebrtcModule],
  providers: [],
  exports: [AddVideoComponent]

})
export class AddVideoModule {}
