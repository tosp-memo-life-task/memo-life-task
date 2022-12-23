import { Injectable } from '@angular/core';
import { CreateWorkspaceRequestBody } from '@memo-life-task/dtos';
import { IDeleteWorkspaceRequestParams } from '@memo-life-task/interfaces';
import { ApiService } from '../../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteWorkspaceService {
  constructor(private apiService: ApiService) {}

  async deleteWorkspaceApi(request: IDeleteWorkspaceRequestParams) {
    const response = await this.apiService.deleteWorkspace(request);

    console.log(response);

    return response;
  }
}
