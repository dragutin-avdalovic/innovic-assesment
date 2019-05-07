import { Component, OnInit } from '@angular/core';
import { Post} from '../post';
import { PostService} from '../post.service';

@Component({
  selector: 'app-post-user-info',
  templateUrl: './post-user-info.component.html',
  styleUrls: ['./post-user-info.component.scss']
})
export class PostUserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
