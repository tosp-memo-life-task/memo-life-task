import { Injectable } from '@angular/core';
import { ApiService } from 'apps/memo-life-task/src/app/common/services/api.service';
import { GetWorkspacesResponseModel } from '../../models/get-workspaces.response.model';

@Injectable({
  providedIn: 'root'
})
export class GetWorkspacesService {
  constructor(private apiService: ApiService) {}

  async getWorkspacesApi(): Promise<GetWorkspacesResponseModel> {
    const response = await this.apiService.getWorkspaces();

    response.workspaces = response.workspaces.map((workspace) => {
      workspace.updatedAt = new Date(workspace.updatedAt);
      return workspace;
    });

    const responseModel = new GetWorkspacesResponseModel();
    responseModel.owned = response.workspaces.filter(
      (workspace) => workspace.isOwned
    );
    responseModel.sharedWithMe = response.workspaces.filter(
      (workspace) => !workspace.isOwned
    );

    return responseModel;
  }
}
