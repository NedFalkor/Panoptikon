import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

}