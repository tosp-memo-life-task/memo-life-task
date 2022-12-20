import { Injectable } from '@angular/core';
import { ApiService } from 'apps/memo-life-task/src/app/common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class GetWorkspacesService {
  constructor(private apiService: ApiService) {}

  async getWorkspacesApi() {
    const response = await this.apiService.getWorkspaces();

    console.log(response);

    return response;
  }
}
