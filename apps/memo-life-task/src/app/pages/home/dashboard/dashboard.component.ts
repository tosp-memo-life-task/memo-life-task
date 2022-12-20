import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkspaceResponse } from '@memo-life-task/dtos';
import { NbDialogService } from '@nebular/theme';
import { SharedWorkspaceModel } from '../models/shared-workspace.model';
import { WorkspaceModel } from '../models/workspace.model';
import { CreateWorkspaceModalComponent } from './create-workspace-modal/create-workspace-modal.component';
import { CreateWorkspaceTaskComponent } from './create-workspace-task/create-workspace-task.component';
import { GetWorkspacesService } from './services/get-workspaces.service';

@Component({
  selector: 'tosp-memo-life-task-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ownedWorkspaces: WorkspaceResponse[];
  sharedWithMe: WorkspaceResponse[];
  dummyData: WorkspaceModel[] = [
    new WorkspaceModel(
      '1',
      'Alma',
      'Alamdagsdh adv aedhs vsdfhsadv aedhs vsdfhsadv aedhs vsdfhsdafheadfb adv aedhs vsdfhs ddsnrzn sr Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb',
      '2020.10.21.'
    ),
    new WorkspaceModel(
      '2',
      'Aasfglma',
      'Alamdagsdh dafheadfb adv aedhs vsdfhs ddsnrzn sr Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb',
      '2020.10.12.'
    ),
    new WorkspaceModel(
      '3',
      'Almaadsg',
      'Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs vsdfhs vsdfhs ddsnrzn sr',
      '2020.10.23.'
    ),
    new WorkspaceModel(
      '4',
      'Alma3fasg',
      'Alamdagsdh dafheadfb adv aedhs vsdfhsadv aedhs vsdfhs ddsnrzn sr Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb',
      '2020.01.24.'
    ),
    new WorkspaceModel(
      '5',
      'Alma3fasg',
      'Alamdagsdh dafheadfb adv aedhs vsdfhsadv aedhs vsdfhs ddsnrzn sra as Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb',
      '2020.01.25.'
    )
  ];

  dummySharedData: SharedWorkspaceModel[] = [
    new SharedWorkspaceModel(
      '1',
      'Alma',
      'Alamdagsdh adv aedhs vsdfhsadv aedhs vsdfhsadv aedhs vsdfhsdafheadfb adv aedhs vsdfhs ddsnrzn sr Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb',
      '2020.10.21.',
      'Puzsér Benjámin György'
    ),
    new SharedWorkspaceModel(
      '2',
      'Aasfglma',
      'Alamdagsdh dafheadfb adv aedhs vsdfhs ddsnrzn sr Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb',
      '2020.10.12.',
      'Puzsér Benjámin György'
    ),
    new SharedWorkspaceModel(
      '3',
      'Almaadsg',
      'Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs Alamdagsdh dafheadfb adv aedhsadv aedhs vsdfhsadv aedhs vsdfhs vsdfhs ddsnrzn sr',
      '2020.10.23.',
      'Puzsér Benjámin György'
    )
  ];

  constructor(
    private dialogService: NbDialogService,
    private router: Router,
    private getWorkspacesService: GetWorkspacesService
  ) {}

  ngOnInit(): void {
    this.getWorkspaces();
  }

  async getWorkspaces() {
    const response = await this.getWorkspacesService.getWorkspacesApi();

    this.ownedWorkspaces = response.owned;
    this.sharedWithMe = response.sharedWithMe;
  }

  createWorkspace() {
    this.dialogService.open(CreateWorkspaceModalComponent, {
      backdropClass: 'custom-modal-backdrop',
      dialogClass: 'custom-modal-dialog'
    });
  }

  viewWorkspace(id: number) {
    this.router.navigate(['home/workspace', id]);
  }
}
