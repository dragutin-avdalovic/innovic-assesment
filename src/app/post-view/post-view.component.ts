import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {User} from '../user';
import { PostService} from '../post.service';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  post: Post[];
  user: User[];
  postId: string;
  userId: number;
  constructor(private postService: PostService, private userService: UserService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.getPost(this.postId);
  }
  getPost(id: string): void {
    this.postService.getPost(id)
      .subscribe(post => this.post = post );
  }
  goToView(id: number): void {
    this.router.navigateByUrl('/post-view/' + id);
  }
  editPost() {
    console.log('edit');
  }
}
