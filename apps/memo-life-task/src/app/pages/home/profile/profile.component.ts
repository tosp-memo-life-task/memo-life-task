import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IGetProfileResponse,
  IUpdateUserRequestBody
} from '@memo-life-task/interfaces';
import { GetUserService } from './services/get-user.service';
import { UpdateUserService } from './services/update-user.service';

@Component({
  selector: 'tosp-memo-life-task-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  user: IGetProfileResponse;
  ready: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private getUserService: GetUserService,
    private updateUserService: UpdateUserService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  async getUser() {
    const response = await this.getUserService.getUserApi();
    this.user = response;

    this.form = this.formBuilder.group({
      firstName: [
        this.user.firstName,
        Validators.compose([Validators.required])
      ],
      lastName: [this.user.lastName, Validators.compose([Validators.required])]
    });

    this.ready = true;
  }

  async onSubmit() {
    const request: IUpdateUserRequestBody = {
      firstName: this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value
    };

    await this.updateUserService.updateUserApi(request);
    this.getUser();
  }
}
