import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IDeleteWorkspaceRequestParams,
  IModifyWorkspaceRequestBody,
  IModifyWorkspaceRequestParams
} from '@memo-life-task/interfaces';
import { NbDialogRef } from '@nebular/theme';
import { DeleteWorkspaceService } from '../services/delete-workspaces.service';
import { ModifyWorkspaceService } from '../services/modify-workspaces.service';

@Component({
  selector: 'tosp-memo-life-task-delete-workspace-modal',
  templateUrl: './delete-workspace-modal.component.html',
  styleUrls: ['./delete-workspace-modal.component.scss']
})
export class DeleteWorkspaceModalComponent implements OnInit {
  @Input() workspaceId: number;

  constructor(
    private dialogRef: NbDialogRef<DeleteWorkspaceModalComponent>,
    private deleteWorkspaceService: DeleteWorkspaceService
  ) {}

  ngOnInit(): void {}

  closeModal() {
    this.dialogRef.close(false);
  }

  async deleteWorkspace() {
    const request: IDeleteWorkspaceRequestParams = {
      id: this.workspaceId
    };
    await this.deleteWorkspaceService.deleteWorkspaceApi(request);

    this.dialogRef.close(true);
  }
}
