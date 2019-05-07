import { Component, OnInit } from '@angular/core';
import {Comment} from '../comment';
import { CommentsService} from '../comments.service';

@Component({
  selector: 'app-latest-comments',
  templateUrl: './latest-comments.component.html',
  styleUrls: ['./latest-comments.component.scss']
})
export class LatestCommentsComponent implements OnInit {
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
