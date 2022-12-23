import { Injectable } from '@angular/core';
import { CreateWorkspaceRequestBody } from '@memo-life-task/dtos';
import {
  IRevokeInvitationRequestBody,
  ISendInvitationRequestBody
} from '@memo-life-task/interfaces';
import { ApiService } from '../../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class RevokeInvitaitionService {
  constructor(private apiService: ApiService) {}

  async revokeInvitaitionApi(request: IRevokeInvitationRequestBody) {
    const response = await this.apiService.revokeInvite(request);

    console.log(response);

    return response;
  }
}
