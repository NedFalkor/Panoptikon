import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService, AuthenticationStatus } from '../services/auth.service';

@Directive({
  selector: '[displayIf]'
})
export class DisplayIfDirective implements OnInit, OnDestroy {

  private subscription?: Subscription;

  @Input("displayIf") status?: keyof typeof AuthenticationStatus;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private as: AuthService) {}

  ngOnInit(): void {
      this.subscription = this.as.status.subscribe(s => {
        if (this.status && this.as.is(this.status)) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
    }

    ngOnDestroy(): void {
      this.subscription?.unsubscribe();
    }
}