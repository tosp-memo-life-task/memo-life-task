import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../../common/validators/email.validator';

@Component({
  selector: 'tosp-memo-life-task-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, emailValidator()])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      passwordAgain: ['', Validators.compose([Validators.required])]
    });
    /*
      Barni password matching validator
       { validator: MatchingValidator('password', 'passwordagain') } 
       */
  }

  ngOnInit(): void {}

  async onSubmit() {}

  //you will get logic right here:
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
