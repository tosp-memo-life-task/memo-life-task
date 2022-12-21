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
  selector: 'tosp-memo-life-task-delete-workspace-modal',
  templateUrl: './delete-workspace-modal.component.html',
  styleUrls: ['./delete-workspace-modal.component.scss']
})
export class DeleteWorkspaceModalComponent implements OnInit {
  @Input() workspaceId: number;

  constructor(private dialogRef: NbDialogRef<DeleteWorkspaceModalComponent>) {}

  ngOnInit(): void {}

  closeModal() {
    this.dialogRef.close();
  }

  async deleteWorkspace() {}
}
