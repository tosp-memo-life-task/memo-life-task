import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ITaskResponse, IUserResponse } from '@memo-life-task/interfaces';
import { NbDialogService } from '@nebular/theme';
import { ModifyWorkspaceTaskComponent } from '../../modify-workspace-task/modify-workspace-task.component';

@Component({
  selector: 'tosp-memo-life-task-workspace-todo-table',
  templateUrl: './workspace-todo-table.component.html',
  styleUrls: ['./workspace-todo-table.component.scss']
})
export class WorkspaceTodoTableComponent implements OnInit, OnChanges {
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  @Input() editors: IUserResponse[];
  @Input() tasks: ITaskResponse[];
  @Output() taskChanged: EventEmitter<any> = new EventEmitter();

  displayedColumns: string[] = [
    'name',
    'assignee',
    'priority',
    'status',
    'updatedAt',
    'action'
  ];
  dataSource: MatTableDataSource<ITaskResponse>;
  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {
    console.log(this.tasks);

    this.dataSource = new MatTableDataSource(this.tasks);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.sortingDataAccessor;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.tasks);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.sortingDataAccessor;
  }

  sortingDataAccessor = (item: any, property: string) => {
    switch (property) {
      case 'assignee':
        return item['assignee'].firstName + item['assignee'].lastName;
      default:
        return item[property];
    }
  };

  modifyTask(task: ITaskResponse) {
    if (task) {
      this.dialogService
        .open(ModifyWorkspaceTaskComponent, {
          backdropClass: 'custom-modal-backdrop',
          dialogClass: 'custom-modal-dialog',
          context: {
            editors: this.editors,
            task: task
          }
        })
        .onClose.subscribe(() => {
          this.taskChanged.emit();
        });
    }
  }
}
