import { Component, OnInit } from '@angular/core';
import { WorkspaceModel } from '../models/workspace.model';

@Component({
  selector: 'tosp-memo-life-task-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
