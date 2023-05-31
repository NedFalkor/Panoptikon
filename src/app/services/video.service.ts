import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'http://localhost:8080/video';

  constructor(private http: HttpClient) { }

  saveVideo(file: File, thumbnail: Blob, name: string, description: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('thumbnail', thumbnail);
    formData.append('name', name);
    formData.append('description', description);
    return this.http.post<any>(`${this.apiUrl}`, formData);
  }

  getVideoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deleteVideo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  incrementLikes(videoId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${videoId}/likes/increment`, {});
  }

  decrementLikes(videoId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${videoId}/likes/decrement`, {});
  }

  getNumLikes(videoId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${videoId}/likes`);
  }

}
