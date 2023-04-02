import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/gatekeeper/register/register.component';
import { SubscriptionComponent } from './components/gatekeeper/subscription/subscription.component';
import { WebcamModule } from 'ngx-webcam';
import { AccountModule } from './components/account/account.module';
import { AddModule } from './components/add/add.module';
import { MainMenuModule } from './components/main-menu/main-menu.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SubscriptionComponent,
  ],
  imports: [
    MainMenuModule,
    AccountModule,
    AddModule,
    MainMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    WebcamModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
