import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGetWorkspaceResponse } from '@memo-life-task/interfaces';
import { NbDialogService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { CreateWorkspaceTaskComponent } from '../create-workspace-task/create-workspace-task.component';
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
    private getWorkspaceService: GetWorkspaceService
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
    const response = await this.getWorkspaceService.getWorkspaceApi(
      this.workspaceId
    );

    console.log(response);

    this.workspaceDetails = response;
  }

  modifyWorkspace() {
    if (this.workspaceDetails) {
      this.dialogService.open(ModifyWorkspaceModalComponent, {
        backdropClass: 'custom-modal-backdrop',
        dialogClass: 'custom-modal-dialog',
        context: {
          title: this.workspaceDetails.title,
          despc: this.workspaceDetails.description
        }
      });
    }
  }

  createTask() {
    if (this.workspaceDetails) {
      this.dialogService.open(CreateWorkspaceTaskComponent, {
        backdropClass: 'custom-modal-backdrop',
        dialogClass: 'custom-modal-dialog',
        context: {
          editors: this.workspaceDetails.editors
        }
      });
    }
  }

  modifyWorkspaceEditors() {
    if (this.workspaceDetails) {
      this.dialogService.open(ModifyWorkspaceEditorsModalComponent, {
        backdropClass: 'custom-modal-backdrop',
        dialogClass: 'custom-modal-dialog',
        context: {
          editors: this.workspaceDetails.editors
        }
      });
    }
  }

  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
  }
}
