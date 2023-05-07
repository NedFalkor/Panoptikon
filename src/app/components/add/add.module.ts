import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVideoComponent } from './add-video/add-video.component';

@NgModule({
  declarations: [AddVideoComponent],
  imports: [CommonModule],
  providers: [],
  exports: [AddVideoComponent]
})
export class AddVideoModule {}
