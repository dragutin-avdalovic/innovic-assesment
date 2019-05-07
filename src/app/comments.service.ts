import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Comment } from './comment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
  constructor( private http: HttpClient) { }
  /** GET heroes from the server */
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl);
  }
}
