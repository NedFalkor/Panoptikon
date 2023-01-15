import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor (private accountService: AccountService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if([401, 403].includes(err.status) && this.accountService.userValue) {

                this.accountService.logout();
            }

            const error = err.error?.message || err.statusText;
            return throwError(() => error)
        }))
    }
}
