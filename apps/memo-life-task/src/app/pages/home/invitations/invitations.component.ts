import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../../common/validators/email.validator';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Subscription } from 'rxjs';

import { SharedWorkspaceModel } from '../models/shared-workspace.model';
import { WorkspaceModel } from '../models/workspace.model';
import { GetWorkspacesResponseModel } from '../models/get-workspaces.response.model';
import { GetInvitaitionsService } from './services/get-invitations.service';
import { IListInvitationsResponse } from '@memo-life-task/interfaces';

@Component({
  selector: 'tosp-memo-life-task-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {
  workspaceId: number;
  invitations: IListInvitationsResponse;

  constructor(
    private dialogService: NbDialogService,
    private getInvitaitionsService: GetInvitaitionsService
  ) {}

  ngOnInit() {
    this.getInvitations();
  }

  async getInvitations() {
    const response = await this.getInvitaitionsService.getInvitaitionsApi();
    this.invitations = response;
  }
}
