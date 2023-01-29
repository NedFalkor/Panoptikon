import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuComponent } from './views/main-menu/main-menu.component';
import { AccountSettingsComponent } from './views/account/account-settings/account-settings.component';

const routes: Routes = [
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
