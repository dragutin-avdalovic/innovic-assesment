import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './must-match.validator';
import { PostService} from '../post.service';

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
  constructor(private formBuilder: FormBuilder, private postService: PostService) { }

  ngOnInit() {
    this.post = this.postService.getPost(this.id);
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    }, {
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.postForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.postForm.invalid) {
      return;
    }
  }

}
