import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tosp-memo-life-task-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
  }
  async onSubmit(): Promise<void> {
    console.log('todo');
  }
}
