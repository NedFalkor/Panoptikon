import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../interfaces/user';

export enum AuthenticationStatus {
  ANONYMOUS = 1,
  AUTHENTICATED = 2,
  USER = 3,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  status: BehaviorSubject<AuthenticationStatus> = new BehaviorSubject<AuthenticationStatus>(AuthenticationStatus.ANONYMOUS);
  connectedUser: BehaviorSubject<User|undefined> = new BehaviorSubject<User|undefined>(undefined);

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    const url = `${this.baseUrl}/users`;
    return this.http.post<User>(url, user)
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      );
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    const credentials = { username, password };
    return this.http.post(url, credentials)
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      );
  }

  logout() {
    this.status.next(AuthenticationStatus.ANONYMOUS);
    this.connectedUser.next(undefined);
    localStorage.removeItem("user");
  }

  is(status: keyof typeof AuthenticationStatus): boolean {
    return (AuthenticationStatus[status]&this.status.value) == AuthenticationStatus[status];
  }

    
  }