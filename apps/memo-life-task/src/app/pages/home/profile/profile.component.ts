import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUpdateUserRequestBody } from '@memo-life-task/interfaces';
import { UpdateUserService } from './services/update-user.service';

@Component({
  selector: 'tosp-memo-life-task-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private updateUserService: UpdateUserService
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])]
    });
  }
  async onSubmit() {
    const request: IUpdateUserRequestBody = {
      firstName: this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value
    };

    await this.updateUserService.updateUserApi(request);
  }
}
