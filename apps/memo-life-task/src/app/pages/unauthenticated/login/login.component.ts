import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tosp-memo-life-task-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.pattern('^[a-zA-Z0-9-.]+@{1}([a-z-]+[.]{1})+[a-z-]{2,}'),
          Validators.required,
        ]),
      ],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {}

  async onSubmit() {}

  getErrorMessage(field: string) {
    if (field === 'email' && this.form.get('email')?.touched) {
      if (this.form.get('email')?.hasError('required')) {
        return 'Email is required';
      } else if (this.form.get('email')?.hasError('pattern')) {
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
