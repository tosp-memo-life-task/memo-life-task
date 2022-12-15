import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { CreateWorkspaceTaskComponent } from '../create-workspace-task/create-workspace-task.component';
import { ModifyWorkspaceModalComponent } from '../modify-workspace-modal/modify-workspace-modal.component';
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
export class WorkspaceDetailsComponent implements OnInit {
  workspaceId: number;
  workspaceDetails: WorkspaceDetailsModel;
  private routeSubscriber: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dialogService: NbDialogService
  ) {}

  ngOnInit() {
    this.routeSubscriber = this.route.params.subscribe((params) => {
      this.workspaceId = params['id'];

      if (this.workspaceId) {
        this.getWorkSpaceDetails();
      }
    });
  }

  getWorkSpaceDetails() {
    this.workspaceDetails = new WorkspaceDetailsModel(
      '1',
      'Gyümölcs szedés',
      'Alamdagsdh adv aedhs vsd aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb',
      '2020.10.21.',
      [
        new EditorModel('1', 'The King', true),
        new EditorModel('2', 'Puzsér', false)
      ],
      [
        new TaskModel(
          '1',
          'Alma szedés',
          'Almát kell szedni, mit nem értesz?',
          new EditorModel('2', 'Puzsér', false),
          PriorityEnum.LOW,
          '2020.10.21.'
        ),
        new TaskModel(
          '2',
          'Körte szedés',
          'Körtét kell szedni, már megint mit nem értesz?',
          new EditorModel('1', 'The King', true),
          PriorityEnum.HIGH,
          '2020.10.12.'
        )
      ]
    );
  }

  modifyWorkspace() {
    if (this.workspaceDetails) {
      this.dialogService.open(ModifyWorkspaceModalComponent, {
        backdropClass: 'custom-modal-backdrop',
        dialogClass: 'custom-modal-dialog',
        context: {
          title: this.workspaceDetails.title,
          despc: this.workspaceDetails.descp
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

  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
  }
}
