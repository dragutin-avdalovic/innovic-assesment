import { Component, OnInit } from '@angular/core';
import {Comment} from '../comment';
import { CommentsService} from '../comments.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {
  comments: Comment[];
  comment: Comment[];
  id: string;
  constructor(private commentsService: CommentsService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.getComments();
    this.id = this.route.snapshot.paramMap.get('id').toString();
    this.getComment(this.id);
  }
  getComments(): void {
    this.commentsService.getComments()
      .subscribe(comments => this.comments = comments);
  }
  getComment(id: string): void {
    this.commentsService.getComment(id)
      .subscribe(comment => {
        this.comment = comment;
      });
  }
}
