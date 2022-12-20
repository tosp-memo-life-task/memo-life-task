import { Injectable } from '@angular/core';
import { GetWorkspaceRequestParams } from '@memo-life-task/dtos';
import { ApiService } from 'apps/memo-life-task/src/app/common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private apiService: ApiService) {}

  async callSignInApi(request: GetWorkspaceRequestParams) {
    const response = await this.apiService.getWorkspaces(request);

    console.log(response);

    return response;
  }
}
