import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingsComponent } from '../components/account/account-settings/account-settings.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { AccountChannelComponent } from '../components/account/account-channel/account-channel.component';
import { AddUserComponent } from '../components/add/add-user/add-user.component';
import { AddVideoComponent } from '../components/add/add-video/add-video.component';
import { RegisterComponent } from '../components/register/register.component';
import { CaptureImageComponent } from '../components/capture-image/capture-image.component';
import { SubscriptionComponent } from '../components/subscription/subscription.component';
import { SearchPageComponent } from '../components/search/search-page/search-page.component';
import { VideoViewComponent } from '../components/video-view/video-view.component';


const routes: Routes = [
  { path: 'parametres', component: AccountSettingsComponent },
  { path: 'chaine', component: AccountChannelComponent},
  { path: 'ajout-utilisateur', component: AddUserComponent},
  { path: 'ajout-video', component: AddVideoComponent},
  { path: 'capture-webcam', component: CaptureImageComponent},
  { path: 'inscription', component: RegisterComponent},
  { path: 'enregistrement', component: SubscriptionComponent},
  { path: 'recherche', component: SearchPageComponent},
  { path: 'lecteur', component: VideoViewComponent},
  { path: 'menu', component: MainMenuComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
