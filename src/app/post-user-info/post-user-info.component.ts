import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Post} from '../post';
import { User} from '../user';
import { PostService} from '../post.service';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-user-info',
  templateUrl: './post-user-info.component.html',
  styleUrls: ['./post-user-info.component.scss']
})
export class PostUserInfoComponent implements OnInit {
  post: Post[];
  user: User[];
  postId: string;
  userId: number;
  constructor(private postService: PostService, private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id').toString();
    this.getPost(this.postId);
  }
  getPost(id: string): void {
    this.postService.getPost(id)
      .subscribe(post => {
        this.post = post;
        console.log(this.post);
        this.getUser(post.userId);
      } );
  }
  goToView(id: number): void {
    this.router.navigateByUrl('/post-view/' + id);
  }
  getUser(id: number): void {
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }
}
