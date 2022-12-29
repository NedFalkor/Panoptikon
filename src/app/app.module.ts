import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './footer-header/header/header.component';
import { FooterComponent } from './footer-header/footer/footer.component';
import { MainMenuComponent } from './views/main-menu/main-menu.component';
import { AccountChannelComponent } from './account/account-channel/account-channel.component';
import { AccountSettingsComponent } from './account/account-settings/account-settings.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { AddFriendComponent } from './add/add-friend/add-friend.component';
import { SearchFriendComponent } from './search/search-friend/search-friend.component';
import { ViewPageComponent } from './views/view-page/view-page.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    AccountChannelComponent,
    AccountSettingsComponent,
    SearchPageComponent,
    AddFriendComponent,
    SearchFriendComponent,
    ViewPageComponent,
    RegisterComponent,
    LoginComponent
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
