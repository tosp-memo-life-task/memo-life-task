import { Injectable } from '@angular/core';
import { CreateWorkspaceRequestBody } from '@memo-life-task/dtos';
import { ISendInvitationRequestBody } from '@memo-life-task/interfaces';
import { ApiService } from '../../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SendInvitaitionService {
  constructor(private apiService: ApiService) {}

  async sendInvitaitionApi(request: ISendInvitationRequestBody) {
    const response = await this.apiService.sendInvite(request);

    console.log(response);

    return response;
  }
}
