import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
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
  @Input() editors: IUserResponse[];
  @Input() tasks: ITaskResponse[];
  @Output() taskChanged: EventEmitter<any> = new EventEmitter();

  displayedColumns: string[] = [
    'name',
    'assignee',
    'priority',
    'status',
    'lastModified',
    'action'
  ];
  dataSource: MatTableDataSource<ITaskResponse>;
  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {
    console.log(this.tasks);

    this.dataSource = new MatTableDataSource(this.tasks);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.tasks);
  }

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
