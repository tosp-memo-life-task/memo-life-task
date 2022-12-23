import { Injectable } from '@angular/core';
import { CreateWorkspaceRequestBody } from '@memo-life-task/dtos';
import {
  IAcceptInvitationRequestParams,
  IDeclineInvitationRequestParams,
  IRevokeInvitationRequestBody,
  ISendInvitationRequestBody
} from '@memo-life-task/interfaces';
import { ApiService } from '../../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class DeclineInvitaitionService {
  constructor(private apiService: ApiService) {}

  async declineInvitaitionApi(request: IDeclineInvitationRequestParams) {
    const response = await this.apiService.declineInvitation(request);

    console.log(response);

    return response;
  }
}
