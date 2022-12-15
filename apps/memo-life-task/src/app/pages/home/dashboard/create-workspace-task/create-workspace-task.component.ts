import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { ModifyWorkspaceModalComponent } from '../modify-workspace-modal/modify-workspace-modal.component';
import {
  EditorModel,
  PriorityEnum
} from '../workspace-details/models/workspace-details.model';

@Component({
  selector: 'tosp-memo-life-task-create-workspace-task',
  templateUrl: './create-workspace-task.component.html',
  styleUrls: ['./create-workspace-task.component.scss']
})
export class CreateWorkspaceTaskComponent implements OnInit {
  @Input() editors: EditorModel[];
  form: FormGroup = new FormGroup({});
  me: EditorModel | undefined;

  constructor(
    private dialogRef: NbDialogRef<CreateWorkspaceTaskComponent>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.me = this.editors.find((editor) => editor.isMe);

    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
      assignee: [this.me, Validators.compose([Validators.required])],
      priority: [PriorityEnum.LOW, Validators.compose([Validators.required])]
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  createTask() {
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
