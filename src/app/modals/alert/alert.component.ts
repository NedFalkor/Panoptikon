import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription, timeout } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Alert[] = [];
  alertSubscription: Subscription;
  routeSubscription: Subscription;


  constructor(private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {

    this.alertSubscription = this.alertService.onAlert(this.id).subscribe(alert => {
      if (!alert.message) {
        this.alerts = this.alerts.filter(x => x.KeepAfterRouteChange);

        this.alerts.forEach(x => delete x.KeepAfterRouteChange);
        return;
      }

      this.alerts.push(alert);

      if (alert.autoClose) {
        setTimeout(() => this.remove.alert(alert, 4000)
        )
      }
    });

    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert() {
    if (!this.alerts.includes(alert)) return;

    if (this.fade) {
      alert.fade = true;

      setTimeout(() => {
        this.alerts = this.alerts.filter(x => x! == alert);
      }, 300);
    } else {
      this.alerts = this.alerts.filter(x => x !== alert);
    }
  }

  cssClass(alert: Alert) {
    if (!alert) return;

    const classes = ['alert', ''];

    const alertTypeClass = {
      [AlertType.Success]: 'alert-success',
      [AlertType.Error]: 'alert-danger',
      [AlertType.Info]: 'alert-info',
      [AlertType.Warning]: 'alert-warning'
    }
    if (alert.type !== undefined) {
      classes.push(alertTypeClass[alert.type]);
    }

    if (alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }

}
