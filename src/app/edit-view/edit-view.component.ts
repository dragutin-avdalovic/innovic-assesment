import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService} from '../post.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../user.service';

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
  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id 1', this.id);
    this.postService.getPost(this.id.toString()).subscribe(
      post => { this.post  = post; this.title = post.title; this.body = post.body;
        this.postForm = this.formBuilder.group({
          title: [this.title, Validators.required],
          body: [this.body, Validators.required],
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
    console.log('postAAA', this.post);
    this.postService.updatePost(this.id, this.post);
    // stop here if form is invalid
    if (this.postForm.invalid) {
      return;
    }
  }

}
