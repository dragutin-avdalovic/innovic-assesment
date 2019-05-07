import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Post} from './post';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor( private http: HttpClient) { }
  /** GET heroes from the server */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
}
