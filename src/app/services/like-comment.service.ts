import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LikeComment } from '../interfaces/likeComment';

@Injectable({
  providedIn: 'root'
})
export class LikeCommentService {
  private apiUrl = 'http://localhost:8080/api/like-comments';

  constructor(private http: HttpClient) { }

  getAllLikeComments(): Observable<LikeComment[]> {
    return this.http.get<LikeComment[]>(this.apiUrl);
  }

  createLikeComment(commentId: number, username: string): Observable<LikeComment> {
    return this.http.post<LikeComment>(this.apiUrl, { commentId, username });
  }

  getLikeCommentById(id: number): Observable<LikeComment> {
    return this.http.get<LikeComment>(`${this.apiUrl}/${id}`);
  }

  updateLikeComment(id: number, updatedLikeComment: LikeComment, username: string): Observable<LikeComment> {
    return this.http.put<LikeComment>(`${this.apiUrl}/${id}`, { ...updatedLikeComment, username });
  }

  deleteLikeComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getNumberOfLikesForComment(commentId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count?commentId=${commentId}`);
  }
}

