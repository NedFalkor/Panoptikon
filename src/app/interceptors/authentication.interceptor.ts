import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private as: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.as.is("AUTHENTICATED")) {
      request = request.clone({
        setHeaders: {
          Authorization: "Basic " + btoa(this.as.connectedUser.value?.username + ":" + this.as.connectedUser.value?.password)
        }
      });
    }
    return next.handle(request);
  }
}