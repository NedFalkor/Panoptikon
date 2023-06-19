import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  createUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }

  updateUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put<User>(url, user, httpOptions);
  }

  deleteUser(id: number): Observable<{}> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url);
  }

}