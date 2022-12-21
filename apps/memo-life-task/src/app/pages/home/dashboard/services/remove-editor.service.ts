import { Injectable } from '@angular/core';
import { CreateWorkspaceRequestBody } from '@memo-life-task/dtos';
import {
  IRemoveEditorRequestBody,
  IRemoveEditorRequestParams,
  IRevokeInvitationRequestBody,
  ISendInvitationRequestBody
} from '@memo-life-task/interfaces';
import { ApiService } from '../../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class RemoveEditorService {
  constructor(private apiService: ApiService) {}

  async removeEditorApi(
    requestParams: IRemoveEditorRequestParams,
    requestBody: IRemoveEditorRequestBody
  ) {
    const response = await this.apiService.removeEditor(
      requestParams,
      requestBody
    );

    console.log(response);

    return response;
  }
}
