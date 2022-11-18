import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'tosp-memo-life-task-create-workspace-modal',
  templateUrl: './create-workspace-modal.component.html',
  styleUrls: ['./create-workspace-modal.component.scss']
})
export class CreateWorkspaceModalComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private dialogRef: NbDialogRef<CreateWorkspaceModalComponent>,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {}

  closeModal() {
    this.dialogRef.close();
  }

  createWorkspace() {
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