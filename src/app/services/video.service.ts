import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'http://localhost:8080/api/videos';

  constructor(private http: HttpClient) { }

  uploadVideo(file: File, name: string, description: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('description', description);
    return this.http.post<any>(`${this.apiUrl}`, formData);
  }

  getVideo(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${name}`);
  }

  getAllVideoNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}`);
  }

  deleteVideo(name: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${name}`);
  }

  incrementLikes(name: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${name}/likes/increment`, {});
  }

  decrementLikes(name: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${name}/likes/decrement`, {});
  }

  getNumLikes(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${name}/likes`);
  }
}
