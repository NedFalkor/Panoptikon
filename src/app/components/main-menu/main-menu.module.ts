import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../banners/header/header.component';
import { FooterComponent } from '../banners/footer/footer.component';
import { AddVideoComponent } from '../add/add-video/add-video.component';
import { AddUserComponent } from '../add/add-user/add-user.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AddVideoComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainMenuModule { }
