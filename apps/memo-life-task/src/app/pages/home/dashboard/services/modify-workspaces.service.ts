import { Injectable } from '@angular/core';
import {
  ModifyWorkspaceRequestBody,
  ModifyWorkspaceRequestParams
} from '@memo-life-task/dtos';
import { ApiService } from '../../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ModifyWorkspaceService {
  constructor(private apiService: ApiService) {}

  async modifyWorkspaceApi(
    requestParams: ModifyWorkspaceRequestParams,
    requestBody: ModifyWorkspaceRequestBody
  ) {
    const response = await this.apiService.modifyWorkspace(
      requestParams,
      requestBody
    );

    console.log(response);

    return response;
  }
}
