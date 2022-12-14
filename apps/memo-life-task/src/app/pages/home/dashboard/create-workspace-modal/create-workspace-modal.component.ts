import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'tosp-memo-life-task-create-workspace-modal',
  templateUrl: './create-workspace-modal.component.html',
  styleUrls: ['./create-workspace-modal.component.scss']
})
export class CreateWorkspaceModalComponent {
  form: FormGroup = new FormGroup({});

  constructor(
    private dialogRef: NbDialogRef<CreateWorkspaceModalComponent>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  createWorkspace() {
    this.router.navigate(['home/workspace', 'id']);
    this.dialogRef.close();
    console.log('create');
  }

  getErrorMessage(field: string) {
    if (field === 'name' && this.form.get('name')?.touched) {
      if (this.form.get('name')?.hasError('required')) {
        return 'Name is required';
      }
    } else if (
      field === 'description' &&
      this.form.get('description')?.touched
    ) {
      if (this.form.get('description')?.hasError('required')) {
        return 'Description is required';
      }
    }

    return '';
  }
}
