import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {User} from '../user';
import { PostService} from '../post.service';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: any;
  user: any;
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

}
