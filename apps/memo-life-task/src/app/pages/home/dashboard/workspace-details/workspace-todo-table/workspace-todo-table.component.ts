import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NbDialogService } from '@nebular/theme';
import { ModifyWorkspaceTaskComponent } from '../../modify-workspace-task/modify-workspace-task.component';
import { EditorModel, TaskModel } from '../models/workspace-details.model';

@Component({
  selector: 'tosp-memo-life-task-workspace-todo-table',
  templateUrl: './workspace-todo-table.component.html',
  styleUrls: ['./workspace-todo-table.component.scss']
})
export class WorkspaceTodoTableComponent implements OnInit {
  @Input() editors: EditorModel[];
  @Input() tasks: TaskModel[];

  displayedColumns: string[] = [
    'name',
    'assignee',
    'priority',
    'lastModified',
    'action'
  ];
  dataSource: MatTableDataSource<TaskModel>;
  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tasks);
  }

  modifyTask(task: TaskModel) {
    if (task) {
      this.dialogService.open(ModifyWorkspaceTaskComponent, {
        backdropClass: 'custom-modal-backdrop',
        dialogClass: 'custom-modal-dialog',
        context: {
          editors: this.editors,
          task: task
        }
      });
    }
  }
}
