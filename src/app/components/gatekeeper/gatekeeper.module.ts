import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription/subscription.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    RegisterComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GatekeeperModule { }
