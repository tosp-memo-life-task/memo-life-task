import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TaskModel } from '../models/workspace-details.model';

@Component({
  selector: 'workspace-todo-table',
  templateUrl: './workspace-todo-table.component.html',
  styleUrls: ['./workspace-todo-table.component.scss']
})
export class WorkspaceTodoTableComponent implements OnInit {
  @Input() tasks: TaskModel[];

  displayedColumns: string[] = [
    'name',
    'assignee',
    'priority',
    'lastModified',
    'action'
  ];
  dataSource: MatTableDataSource<TaskModel>;
  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tasks);
  }
}
