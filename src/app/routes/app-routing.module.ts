import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingsComponent } from '../components/account/account-settings/account-settings.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { SearchPageComponent } from '../components/search/search-page/search-page.component';
import { AddUserComponent } from '../components/add-user/add-user.component';
import { RegisterComponent } from '../components/register/register.component';
import { SubscriptionComponent } from '../components/subscription/subscription.component';


const routes: Routes = [
  { path: 'add-user', component: AddUserComponent},
  { path: 'menu', component: MainMenuComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'search-video', component: SearchPageComponent },
  { path: 'settings', component: AccountSettingsComponent },
  { path: 'subscription', component: SubscriptionComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
