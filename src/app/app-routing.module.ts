import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth/auth-page/auth-page.component';

const routes: Routes = [

  {path: 'auth',
   children: [
    {path: 'auth-page', component: AuthPageComponent}
   ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
