import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService} from '../post.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-view',
  templateUrl: './add-view.component.html',
  styleUrls: ['./add-view.component.scss']
})
export class AddViewComponent implements OnInit {
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
  }
  // convenience getter for easy access to form fields
  get f() { return this.postForm.controls; }
  // submit function
  onSubmit() {
    this.submitted = true;
    this.post = this.postForm.value;
    this.userId = '1';
    this.post.userId = this.userId;
    console.log(this.post);
    this.postService.addPost(this.post);
    this.router.navigateByUrl('/post-list');
    // stop here if form is invalid
    if (this.postForm.invalid) {
      return;
    }
  }

}
