import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AccountChannelComponent } from './components/account/account-channel/account-channel.component';
import { SearchPageComponent } from './components/search/search-page/search-page.component';
import { AddVideoComponent } from './components/add/add-video/add-video.component';
import { VideoViewComponent } from './components/video-view/video-view.component';
import { RegisterComponent } from './components/register/register.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { AddUserComponent } from './components/add/add-user/add-user.component';
import { FilterPipe } from './components/add/add-user/filterUser.pipe';
import { WebcamModule } from 'ngx-webcam';
import { CaptureImageComponent } from './components/account/account-settings/capture-image/capture-image.component';
import { NgxWebrtcModule } from 'ngx-webrtc';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    AccountChannelComponent,
    SearchPageComponent,
    AddVideoComponent,
    VideoViewComponent,
    RegisterComponent,
    SubscriptionComponent,
    AddUserComponent,
    FilterPipe,
    CaptureImageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    WebcamModule,
    NgxWebrtcModule.forRoot({
      userIdentifier: 'id',
      debug: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
