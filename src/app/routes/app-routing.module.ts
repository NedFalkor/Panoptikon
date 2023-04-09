import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingsComponent } from '../components/account/account-settings/account-settings.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { SearchPageComponent } from '../components/search/search-page/search-page.component';
import { AddUserComponent } from '../components/add/add-user/add-user.component';
import { CaptureImageComponent } from '../components/account/capture-image/capture-image.component';
import { RegisterComponent } from '../components/gatekeeper/register/register.component';
import { AccountChannelComponent } from '../components/account/account-channel/account-channel.component';
import { AddVideoComponent } from '../components/add/add-video/add-video.component';
import { SubscriptionComponent } from '../components/gatekeeper/subscription/subscription.component';
import { VideoViewComponent } from '../components/video-view/video-view.component';


const routes: Routes = [
  { path: 'account-channel', component: AccountChannelComponent},
  { path: 'account-settings', component: AccountSettingsComponent},
  { path: 'add-user', component: AddUserComponent},
  { path: 'add-video', component: AddVideoComponent},
  { path: 'capture-image', component: CaptureImageComponent},
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'search-page', component: SearchPageComponent },
  { path: 'settings', component: AccountSettingsComponent },
  { path: 'subscription', component: SubscriptionComponent},
  { path: 'video-view', component: VideoViewComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
