import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MainMenuComponent } from './main-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainMenuModule { }
