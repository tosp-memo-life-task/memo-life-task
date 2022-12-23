import { Injectable } from '@angular/core';
import { IUpdateUserRequestBody } from '@memo-life-task/interfaces';
import { ApiService } from '../../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  constructor(private apiService: ApiService) {}

  async updateUserApi(request: IUpdateUserRequestBody) {
    const response = await this.apiService.updateUser(request);

    console.log(response);

    return response;
  }
}
