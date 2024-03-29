import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl = '/api/file';

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}