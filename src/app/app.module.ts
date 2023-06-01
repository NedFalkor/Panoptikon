import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AccountChannelComponent } from './components/account/account-channel/account-channel.component';
import { SearchPageComponent } from './components/search/search-page/search-page.component';
import { VideoViewComponent } from './components/video-view/video-view.component';
import { AddUserComponent } from './components/add/add-user/add-user.component';
import { FilterPipe } from './components/add/add-user/filterUser.pipe';
import { WebcamModule } from 'ngx-webcam';
import { CaptureImageComponent } from './components/account/capture-image/capture-image.component';
import { FooterComponent } from './components/banners/footer/footer.component';
import { HeaderComponent } from './components/banners/header/header.component';
import { SubscriptionComponent } from './components/gatekeeper/subscription/subscription.component';
import { AddVideoComponent } from './components/add/add-video/add-video.component';


@NgModule({
    declarations: [
        AppComponent,
        AddVideoComponent,
        HeaderComponent,
        FooterComponent,
        MainMenuComponent,
        AccountChannelComponent,
        SearchPageComponent,
        VideoViewComponent,
        SubscriptionComponent,
        AddUserComponent,
        FilterPipe,
        CaptureImageComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        WebcamModule,
    ]
})
export class AppModule { }
