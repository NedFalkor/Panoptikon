import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthPageComponent } from './auth/auth-page/auth-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AccountChannelComponent } from './account/account-channel/account-channel.component';
import { AccountSettingsComponent } from './account/account-settings/account-settings.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AddFriendComponent } from './add/add-friend/add-friend.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { ViewPageComponent } from './views/view-page/view-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    AccountChannelComponent,
    AccountSettingsComponent,
    SearchPageComponent,
    AddFriendComponent,
    SearchFriendComponent,
    ViewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
