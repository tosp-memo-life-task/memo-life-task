import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IModifyWorkspaceRequestBody,
  IModifyWorkspaceRequestParams
} from '@memo-life-task/interfaces';
import { NbDialogRef } from '@nebular/theme';
import { ModifyWorkspaceService } from '../services/modify-workspaces.service';

@Component({
  selector: 'tosp-memo-life-task-modify-workspace-modal',
  templateUrl: './modify-workspace-modal.component.html',
  styleUrls: ['./modify-workspace-modal.component.scss']
})
export class ModifyWorkspaceModalComponent implements OnInit {
  @Input() workspaceId: number;
  @Input() title: string;
  @Input() despc: string;

  form: FormGroup = new FormGroup({});

  constructor(
    private dialogRef: NbDialogRef<ModifyWorkspaceModalComponent>,
    private formBuilder: FormBuilder,
    private router: Router,
    private modifyWorkspaceService: ModifyWorkspaceService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.title, Validators.compose([Validators.required])],
      description: [this.despc, Validators.compose([Validators.required])]
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  async modifyWorkspace() {
    const title = this.form.controls['name'].value;
    const description = this.form.controls['description'].value;

    const requestParams: IModifyWorkspaceRequestParams = {
      id: +this.workspaceId
    };

    const requestBody: IModifyWorkspaceRequestBody = {
      title: title,
      description: description
    };

    await this.modifyWorkspaceService.modifyWorkspaceApi(
      requestParams,
      requestBody
    );

    this.dialogRef.close();
    console.log('modify');
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
