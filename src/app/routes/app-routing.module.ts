import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingsComponent } from '../components/account/account-settings/account-settings.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { CaptureImageComponent } from '../components/account/account-settings/capture-image/capture-image.component';


const routes: Routes = [
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: 'capture-image', component: CaptureImageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
