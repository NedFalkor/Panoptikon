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
import { SearchPageComponent } from './views/search/search-page/search-page.component';
import { AddVideoComponent } from './views/add/add-video/add-video.component';
import { VideoViewComponent } from './views/video-view/video-view.component';
import { RegisterComponent } from './views/register/register.component';
import { SubscriptionComponent } from './views/subscription/subscription.component';
import { AddUserComponent } from './views/add/add-user/add-user.component';
import { SearchFriendComponent } from './views/search/search-friend/search-friend.component';
import { FilterPipe } from './views/search/search-friend/filterUser.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    AccountChannelComponent,
    SearchPageComponent,
    SearchFriendComponent,
    AddVideoComponent,
    VideoViewComponent,
    RegisterComponent,
    SubscriptionComponent,
    AddUserComponent,
    FilterPipe

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
