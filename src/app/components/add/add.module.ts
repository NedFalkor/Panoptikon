import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVideoComponent } from './add-video/add-video.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [AddVideoComponent,
    HeaderComponent,
    FooterComponent],
  imports: [CommonModule],
  providers: [],
  exports: [AddVideoComponent]
})
export class AddVideoModule { }
