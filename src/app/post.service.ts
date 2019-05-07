import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts/';
  constructor( private http: HttpClient) { }
  /** GET heroes from the server */
  getPost(id: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl + id);
  }
}
