import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  IAcceptInvitationRequestParams,
  IDeclineInvitationRequestParams,
  IInvitationResponse,
  IListInvitationsResponse,
  ITaskResponse,
  IUserResponse
} from '@memo-life-task/interfaces';
import { NbDialogService } from '@nebular/theme';
import { AcceptInvitaitionService } from '../services/accept-invitation.service';
import { DeclineInvitaitionService } from '../services/decline-invitation.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tosp-memo-life-task-invitations-table',
  templateUrl: './invitations-table.component.html',
  styleUrls: ['./invitations-table.component.scss']
})
export class InvitationsTableComponent implements OnInit, OnChanges {
  @Input() invitationsResponse: IListInvitationsResponse;
  @Output() invitationChanged: EventEmitter<any> = new EventEmitter();

  displayedColumns: string[] = ['name', 'user', 'action'];
  dataSource: MatTableDataSource<IInvitationResponse>;
  constructor(
    private dialogService: NbDialogService,
    private acceptInvitaitionService: AcceptInvitaitionService,
    private declineInvitaitionService: DeclineInvitaitionService
  ) {}

  ngOnInit(): void {
    console.log(this.invitationsResponse);

    this.dataSource = new MatTableDataSource(
      this.invitationsResponse.invitations
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(
      this.invitationsResponse.invitations
    );
  }

  emitEvent() {
    this.invitationChanged.emit();
  }

  async acceptInvitation(invitation: IInvitationResponse) {
    const request: IAcceptInvitationRequestParams = {
      id: invitation.id
    };

    await this.acceptInvitaitionService.acceptInvitaitionApi(request);
    this.emitEvent();
  }

  async declineInvitation(invitation: IInvitationResponse) {
    const request: IDeclineInvitationRequestParams = {
      id: invitation.id
    };

    console.log(request);

    await this.declineInvitaitionService.declineInvitaitionApi(request);
    this.emitEvent();
  }
}
