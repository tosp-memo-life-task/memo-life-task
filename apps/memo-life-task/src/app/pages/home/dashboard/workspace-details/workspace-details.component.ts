import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGetWorkspaceResponse } from '@memo-life-task/interfaces';
import { NbDialogService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { CreateWorkspaceTaskComponent } from '../create-workspace-task/create-workspace-task.component';
import { DeleteWorkspaceModalComponent } from '../delete-workspace-modal/delete-workspace-modal.component';
import { ModifyWorkspaceEditorsModalComponent } from '../modify-workspace-editors-modal/modify-workspace-editors-modal.component';
import { ModifyWorkspaceModalComponent } from '../modify-workspace-modal/modify-workspace-modal.component';
import { GetWorkspaceService } from '../services/get-workspace.service';
import {
  EditorModel,
  PriorityEnum,
  TaskModel,
  WorkspaceDetailsModel
} from './models/workspace-details.model';

@Component({
  selector: 'tosp-memo-life-task-workspace-details',
  templateUrl: './workspace-details.component.html',
  styleUrls: ['./workspace-details.component.scss']
})
export class WorkspaceDetailsComponent implements OnInit, OnDestroy {
  workspaceId: number;
  workspaceDetails: IGetWorkspaceResponse;
  private routeSubscriber: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dialogService: NbDialogService,
    private getWorkspaceService: GetWorkspaceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeSubscriber = this.route.params.subscribe((params) => {
      this.workspaceId = params['id'];

      if (this.workspaceId) {
        this.getWorkSpaceDetails();
      }
    });
  }

  async getWorkSpaceDetails() {
    console.log('getWorkspaceDetails');

    const response = await this.getWorkspaceService.getWorkspaceApi(
      this.workspaceId
    );

    console.log(response);

    this.workspaceDetails = response;
  }

  modifyWorkspace() {
    if (this.workspaceDetails) {
      this.dialogService
        .open(ModifyWorkspaceModalComponent, {
          backdropClass: 'custom-modal-backdrop',
          dialogClass: 'custom-modal-dialog',
          context: {
            workspaceId: this.workspaceId,
            title: this.workspaceDetails.title,
            despc: this.workspaceDetails.description
          }
        })
        .onClose.subscribe(() => {
          this.getWorkSpaceDetails();
        });
    }
  }

  deleteWorkspace() {
    if (this.workspaceDetails) {
      this.dialogService
        .open(DeleteWorkspaceModalComponent, {
          backdropClass: 'custom-modal-backdrop',
          dialogClass: 'custom-modal-dialog',
          context: {
            workspaceId: this.workspaceId
          }
        })
        .onClose.subscribe((value) => {
          if (value) {
            this.router.navigate(['home']);
          }
        });
    }
  }

  createTask() {
    if (this.workspaceDetails) {
      this.dialogService
        .open(CreateWorkspaceTaskComponent, {
          backdropClass: 'custom-modal-backdrop',
          dialogClass: 'custom-modal-dialog',
          context: {
            editors: this.workspaceDetails.editors
          }
        })
        .onClose.subscribe(() => {
          this.getWorkSpaceDetails();
        });
    }
  }

  modifyWorkspaceEditors() {
    if (this.workspaceDetails) {
      this.dialogService
        .open(ModifyWorkspaceEditorsModalComponent, {
          backdropClass: 'custom-modal-backdrop',
          dialogClass: 'custom-modal-dialog',
          context: {
            editors: this.workspaceDetails.editors,
            workspaceId: this.workspaceId,
            invitations: this.workspaceDetails.invitations
          }
        })
        .onClose.subscribe(() => {
          this.getWorkSpaceDetails();
        });
    }
  }

  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
  }
}
