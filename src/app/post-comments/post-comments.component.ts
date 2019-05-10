import { Component, OnInit } from '@angular/core';
import {Comment} from '../comment';
import { CommentsService} from '../comments.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {
  comments: Comment[];
  constructor(private commentsService: CommentsService) { }
  ngOnInit() {
    this.getComments();
  }
  getComments(): void {
    this.commentsService.getComments()
      .subscribe(comments => this.comments = comments);
  }
}
