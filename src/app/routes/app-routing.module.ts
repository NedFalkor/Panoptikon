import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingsComponent } from '../components/account/account-settings/account-settings.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { VideoViewComponent } from '../components/video-view/video-view.component';


const routes: Routes = [
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'video-view', component: VideoViewComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
