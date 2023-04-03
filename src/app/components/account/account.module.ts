import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureImageComponent } from './capture-image/capture-image.component';
import { WebcamModule } from 'ngx-webcam';
import { AccountChannelComponent } from './account-channel/account-channel.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { BannersModule } from '../banners/banners.module';

@NgModule({
  declarations: [
    CaptureImageComponent,
    AccountChannelComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    WebcamModule,
    BannersModule
  ]
})
export class AccountModule { }