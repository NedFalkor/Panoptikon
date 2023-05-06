import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GatekeeperModule } from './components/gatekeeper/gatekeeper.module';
import { AddVideoComponent } from './components/add/add-video/add-video.component';
import { AddModule } from './components/add/add.module';

@NgModule({
  declarations: [
    AppComponent,
    AddVideoComponent
  ],
  imports: [
    AddModule,
    GatekeeperModule,
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
