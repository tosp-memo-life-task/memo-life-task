import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpRequestBody } from '@memo-life-task/dtos';
import { ISignUpRequestBody } from '@memo-life-task/interfaces';
import { emailValidator } from '../../../common/validators/email.validator';
import { MatchingValidator } from '../../../common/validators/matching.validator';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'tosp-memo-life-task-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private router: Router
  ) {
    this.form = this.formBuilder.group(
      {
        email: [
          '',
          Validators.compose([Validators.required, emailValidator()])
        ],
        firstName: ['', Validators.compose([Validators.required])],
        lastName: ['', Validators.compose([Validators.required])],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
          ])
        ],
        passwordAgain: ['', Validators.compose([Validators.required])]
      },
      { validator: MatchingValidator('password', 'passwordAgain') }
    );
  }

  async onSubmit() {
    const signUpRequest: ISignUpRequestBody = {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
      firstName: this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value
    };

    await this.signUpService.callSignUpApi(signUpRequest);

    this.router.navigate(['home']);
  }

  getErrorMessage(field: string) {
    if (field === 'email' && this.form.get('email')?.touched) {
      if (this.form.get('email')?.hasError('required')) {
        return 'Email is required';
      } else if (this.form.get('email')?.hasError('invalidFormat')) {
        return 'Enter valid email format';
      }
    } else if (field === 'password' && this.form.get('password')?.touched) {
      if (this.form.get('password')?.hasError('required')) {
        return 'Password is required';
      } else if (this.form.get('password')?.hasError('pattern')) {
        return 'Min 1 number, lower- and uppercase letters';
      }
    } else if (
      field === 'passwordAgain' &&
      this.form.get('passwordAgain')?.touched
    ) {
      if (
        this.form.get('password')?.hasError('required') ||
        this.form.get('passwordAgain')?.hasError('confirmedValidator')
      ) {
        return 'The two passwords do not match';
      }
    } else if (field === 'firstName' && this.form.get('firstName')?.touched) {
      if (this.form.get('firstName')?.hasError('required')) {
        return 'First name is required';
      }
    } else if (field === 'lastName' && this.form.get('lastName')?.touched) {
      if (this.form.get('lastName')?.hasError('required')) {
        return 'Last name is required';
      }
    }

    return '';
  }
}
