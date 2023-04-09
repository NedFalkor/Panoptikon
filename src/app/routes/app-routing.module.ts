import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingsComponent } from '../components/account/account-settings/account-settings.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { SearchPageComponent } from '../components/search/search-page/search-page.component';


const routes: Routes = [
  { path: 'menu', component: MainMenuComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'settings', component: AccountSettingsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
