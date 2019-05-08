import { Component, OnInit } from '@angular/core';
import { Post} from '../post';
import { User} from '../user';
import { PostService} from '../post.service';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-user-info',
  templateUrl: './post-user-info.component.html',
  styleUrls: ['./post-user-info.component.scss']
})
export class PostUserInfoComponent implements OnInit {
  post: Post[];
  user: User[];
  constructor(private postService: PostService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getPost('1');
    this.getUser(1);
  }
  getPost(id: string): void {
    this.postService.getPost(id)
      .subscribe(post => this.post = post);
  }
  goToView(id: number): void {
    this.router.navigateByUrl('/post-view/' + id);
  }
  getUser(id: number): void {
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }
}
