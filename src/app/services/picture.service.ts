import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) { }

  getAllPictures(): Observable<any> {
    return this.http.get('/api/pictures');
  }

  getPictureById(id: number): Observable<any> {
    return this.http.get(`/api/pictures/${id}`);
  }

  deletePicture(id: number): Observable<any> {
    return this.http.delete(`/api/pictures/${id}`);
  }

  uploadPicture(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post('/api/pictures', formData);
  }

}