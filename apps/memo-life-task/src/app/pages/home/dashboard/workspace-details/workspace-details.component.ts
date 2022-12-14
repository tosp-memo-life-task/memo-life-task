import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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

  constructor(private route: ActivatedRoute) {}

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
          PriorityEnum.low,
          '2020.10.21.'
        ),
        new TaskModel(
          '2',
          'Körte szedés',
          'Körtét kell szedni, már megint mit nem értesz?',
          new EditorModel('1', 'The King', true),
          PriorityEnum.high,
          '2020.10.12.'
        )
      ]
    );
  }

  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
  }
}
