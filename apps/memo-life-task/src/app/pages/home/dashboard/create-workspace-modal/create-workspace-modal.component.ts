import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateWorkspaceResponse } from '@memo-life-task/dtos';
import { NbDialogRef } from '@nebular/theme';
import { CreateWorkspaceService } from '../services/create-workspaces.service';

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
    private router: Router,
    private createWorkspaceService: CreateWorkspaceService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  async createWorkspace() {
    const request: any = new Object();
    request.title = this.form.controls['name'].value;
    request.description = this.form.controls['description'].value;

    const response: CreateWorkspaceResponse =
      await this.createWorkspaceService.createWorkspaceApi(request);

    this.router.navigate(['home/workspace', response.id]);
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
