import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from '../../../common/validators/email.validator';

@Component({
  selector: 'tosp-memo-life-task-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, emailValidator()])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  async onSubmit() {
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
      }
    }

    return '';
  }
}
