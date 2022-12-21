import { Injectable } from '@angular/core';
import { CreateWorkspaceRequestBody } from '@memo-life-task/dtos';
import {
  IAcceptInvitationRequestParams,
  IRevokeInvitationRequestBody,
  ISendInvitationRequestBody
} from '@memo-life-task/interfaces';
import { ApiService } from '../../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AcceptInvitaitionService {
  constructor(private apiService: ApiService) {}

  async acceptInvitaitionApi(request: IAcceptInvitationRequestParams) {
    const response = await this.apiService.acceptInvitation(request);

    console.log(response);

    return response;
  }
}
