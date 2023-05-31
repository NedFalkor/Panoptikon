import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentsUrl = 'api/comments';

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl);
  }

  createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentsUrl, comment);
  }

  getCommentById(id: number): Observable<Comment> {
    const url = `${this.commentsUrl}/${id}`;
    return this.http.get<Comment>(url);
  }

  updateComment(id: number, updatedComment: Comment): Observable<any> {
    const url = `${this.commentsUrl}/${id}`;
    return this.http.put(url, updatedComment);
  }

  deleteComment(id: number): Observable<any> {
    const url = `${this.commentsUrl}/${id}`;
    return this.http.delete(url);
  }

  incrementNumLikes(commentId: number): Observable<number> {
    const url = `${this.commentsUrl}/${commentId}/likes/increment`;
    return this.http.put<number>(url, null);
  }

  decrementNumLikes(commentId: number): Observable<number> {
    const url = `${this.commentsUrl}/${commentId}/likes/decrement`;
    return this.http.put<number>(url, null);
  }
}