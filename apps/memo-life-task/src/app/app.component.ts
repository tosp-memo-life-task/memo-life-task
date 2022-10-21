import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@memo-life-task/dtos';

@Component({
  selector: 'tosp-memo-life-task-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  spinnerWithoutBackdrop = false;
}
