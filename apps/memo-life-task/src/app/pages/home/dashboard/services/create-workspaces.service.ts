import { Injectable } from '@angular/core';
import { CreateWorkspaceRequestBody } from '@memo-life-task/dtos';
import { ApiService } from 'apps/memo-life-task/src/app/common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CreateWorkspaceService {
  constructor(private apiService: ApiService) {}

  async createWorkspaceApi(request: CreateWorkspaceRequestBody) {
    const response = await this.apiService.createWorkspace(request);

    console.log(response);

    return response;
  }
}
