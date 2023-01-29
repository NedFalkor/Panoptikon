import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { MainMenuComponent } from './views/main-menu/main-menu.component';
import { AccountChannelComponent } from './views/account/account-channel/account-channel.component';
import { AccountSettingsComponent } from './views/account/account-settings/account-settings.component';
import { SearchPageComponent } from './views/search/search-page/search-page.component';
import { SearchFriendComponent } from './views/search/search-friend/search-friend.component';
import { AddVideoComponent } from './views/add/add-video/add-video.component';
import { VideoViewComponent } from './views/video-view/video-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    AccountChannelComponent,
    AccountSettingsComponent,
    SearchPageComponent,
    SearchFriendComponent,
    AddVideoComponent,
    VideoViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
