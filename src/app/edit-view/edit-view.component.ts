import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {
  edit = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });
  result: any;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.result.personalData = Object.assign({}, this.edit);

    // Do useful stuff with the gathered data
  }
}
