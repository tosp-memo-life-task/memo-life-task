import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { ModifyWorkspaceModalComponent } from '../modify-workspace-modal/modify-workspace-modal.component';
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
  @Input() task: TaskModel;
  @Input() editors: EditorModel[];
  form: FormGroup = new FormGroup({});
  me: EditorModel | undefined;

  constructor(
    private dialogRef: NbDialogRef<ModifyWorkspaceTaskComponent>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.me = this.editors.find((editor) => editor.isMe);

    console.log(this.task);

    this.form = this.formBuilder.group({
      name: [this.task.name, Validators.compose([Validators.required])],
      details: [this.task.details, Validators.compose([Validators.required])],
      assignee: [
        this.editors.find((editor) => editor.id == this.task.assignee.id),
        Validators.compose([Validators.required])
      ],
      priority: [this.task.priority, Validators.compose([Validators.required])]
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
        return 'details is required';
      }
    }

    return '';
  }
}
