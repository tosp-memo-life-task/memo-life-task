import { Injectable } from '@angular/core';
import { IGetWorkspaceResponse } from '@memo-life-task/interfaces';
import { ApiService } from '../../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class GetWorkspaceService {
  constructor(private apiService: ApiService) {}

  async getWorkspaceApi(workspaceId: number): Promise<IGetWorkspaceResponse> {
    const response = await this.apiService.getWorkspace(workspaceId);

    response.tasks = response.tasks.map((task) => {
      task.updatedAt = new Date(task.updatedAt);
      return task;
    });

    response.updatedAt = new Date(response.updatedAt);

    return response;
  }
}
