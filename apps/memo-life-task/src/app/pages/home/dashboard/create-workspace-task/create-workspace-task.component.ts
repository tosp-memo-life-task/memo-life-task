import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskPriorityEnum } from '@memo-life-task/enums';
import {
  ICreateTaskRequestBody,
  IUserResponse
} from '@memo-life-task/interfaces';
import { NbDialogRef } from '@nebular/theme';
import { ModifyWorkspaceModalComponent } from '../modify-workspace-modal/modify-workspace-modal.component';
import { CreateTaskService } from '../services/create-task.service';
import { EditorModel } from '../workspace-details/models/workspace-details.model';

@Component({
  selector: 'tosp-memo-life-task-create-workspace-task',
  templateUrl: './create-workspace-task.component.html',
  styleUrls: ['./create-workspace-task.component.scss']
})
export class CreateWorkspaceTaskComponent implements OnInit {
  @Input() workspaceId: number;
  @Input() editors: IUserResponse[];
  form: FormGroup = new FormGroup({});
  me: IUserResponse | undefined;

  constructor(
    private dialogRef: NbDialogRef<CreateWorkspaceTaskComponent>,
    private formBuilder: FormBuilder,
    private router: Router,
    private createTaskService: CreateTaskService
  ) {}

  ngOnInit(): void {
    this.me = this.editors.find((editor) => editor.isUser);

    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      editor: [this.me, Validators.compose([Validators.required])],
      priority: [
        TaskPriorityEnum.LOW,
        Validators.compose([Validators.required])
      ]
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  async createTask() {
    const name = this.form.controls['name'].value;
    const description = this.form.controls['description'].value;
    const editorId = this.form.controls['editor'].value.id;
    const priority = this.form.controls['priority'].value;

    const request: ICreateTaskRequestBody = {
      name: name,
      description: description,
      editorId: editorId,
      priority: priority,
      workspaceId: +this.workspaceId
    };

    await this.createTaskService.createTaskApi(request);

    console.log('task created');

    this.dialogRef.close();
    console.log('create task');
  }

  getErrorMessage(field: string) {
    if (field === 'name' && this.form.get('name')?.touched) {
      if (this.form.get('name')?.hasError('required')) {
        return 'Name is required';
      }
    } else if (field === 'details' && this.form.get('details')?.touched) {
      if (this.form.get('details')?.hasError('required')) {
        return 'Details are required';
      }
    }

    return '';
  }
}
