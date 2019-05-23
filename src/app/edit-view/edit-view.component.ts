import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService} from '../post.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {
  postForm: FormGroup;
  submitted = false;
  post: any;
  id: string;
  title: string;
  body: string;
  userId: string;
  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    }, {
    });
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id first', this.id);
    this.postService.getPost(this.id.toString()).subscribe(
    post => {  this.post  = post; this.title = post.title;
    this.body = post.body;
    this.id = post.id;
    this.userId = post.userId;
    this.postForm = this.formBuilder.group({
      title: [post.title, Validators.required],
      body: [post.body, Validators.required],
    }, {
    });
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.postForm.controls; }

  onSubmit() {
    console.log('submited');
    this.submitted = true;
    this.post = this.postForm.value;
    this.post.id = this.id;
    this.post.userId = this.userId;
    console.log('post', this.post);
    this.postService.updatePost(this.id, this.post);
    this.router.navigateByUrl('/post-view/' + this.id);
    // stop here if form is invalid
    if (this.postForm.invalid) {
      return;
    }
  }

}
