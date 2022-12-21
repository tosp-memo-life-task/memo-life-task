import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskStatusEnum } from '@memo-life-task/enums';
import {
  IModifyTaskRequestBody,
  IModifyTaskRequestParams,
  ITaskResponse,
  IUserResponse
} from '@memo-life-task/interfaces';
import { NbDialogRef } from '@nebular/theme';
import { ModifyWorkspaceModalComponent } from '../modify-workspace-modal/modify-workspace-modal.component';
import { ModifyTaskService } from '../services/modify-task.service';
import {
  EditorModel,
  PriorityEnum,
  TaskModel
} from '../workspace-details/models/workspace-details.model';

@Component({
  selector: 'tosp-memo-life-task-modify-workspace-task',
  templateUrl: './modify-workspace-task.component.html',
  styleUrls: ['./modify-workspace-task.component.scss']
})
export class ModifyWorkspaceTaskComponent implements OnInit {
  @Input() workspaceId: number;
  @Input() editors: IUserResponse[];
  @Input() task: ITaskResponse;
  form: FormGroup = new FormGroup({});
  me: IUserResponse | undefined;

  constructor(
    private dialogRef: NbDialogRef<ModifyWorkspaceTaskComponent>,
    private formBuilder: FormBuilder,
    private router: Router,
    private modifyTaskService: ModifyTaskService
  ) {}

  ngOnInit(): void {
    this.me = this.editors.find((editor) => editor.isUser);

    console.log(this.task);

    this.form = this.formBuilder.group({
      name: [this.task.name, Validators.compose([Validators.required])],
      description: [
        this.task.description,
        Validators.compose([Validators.required])
      ],
      editor: [
        this.editors.find((editor) => editor.id == this.task.assignee.id),
        Validators.compose([Validators.required])
      ],
      priority: [this.task.priority, Validators.compose([Validators.required])],
      status: [this.task.status, Validators.compose([Validators.required])]
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  async modifyTask(task: ITaskResponse) {
    const requestParams: IModifyTaskRequestParams = {
      id: task.id
    };
    const requestBody: IModifyTaskRequestBody = {
      name: this.form.controls['name'].value,
      description: this.form.controls['description'].value,
      editorId: this.form.controls['editor'].value.id,
      priority: this.form.controls['priority'].value,
      status: this.form.controls['status'].value
    };

    await this.modifyTaskService.modifyTaskApi(requestParams, requestBody);

    this.dialogRef.close();
    console.log('modify task');
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
