import { Component, OnInit } from '@angular/core';
import { PostsService} from '../posts.service';
import {Post} from '../post';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list-table',
  templateUrl: './post-list-table.component.html',
  styleUrls: ['./post-list-table.component.scss']
})
export class PostListTableComponent implements OnInit {
  posts: Post[];
  constructor(private postsService: PostsService, private router: Router) { }
  ngOnInit() {
  this.getPosts();
  }
  getPosts(): void {
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
  goToView(id: number): void {
    this.router.navigateByUrl('/post-view/' + id);
  }
}
