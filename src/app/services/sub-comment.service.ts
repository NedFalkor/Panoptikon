import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubComment } from '../interfaces/sub-comment';

@Injectable({
  providedIn: 'root'
})
export class SubCommentService {

  private apiUrl = 'http://localhost:8080/api/sub-comments';

  constructor(private http: HttpClient) { }

  getAllSubComments(): Observable<SubComment[]> {
    return this.http.get<SubComment[]>(this.apiUrl);
  }

  createSubComment(subCommentDto: SubComment, commentId: number): Observable<SubComment> {
    return this.http.post<SubComment>(`${this.apiUrl}/comments/${commentId}`, subCommentDto);
  }

  getSubCommentById(id: number): Observable<SubComment> {
    return this.http.get<SubComment>(`${this.apiUrl}/${id}`);
  }

  updateSubComment(id: number, updatedSubCommentDto: SubComment): Observable<SubComment> {
    return this.http.put<SubComment>(`${this.apiUrl}/${id}`, updatedSubCommentDto);
  }

  deleteSubComment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
