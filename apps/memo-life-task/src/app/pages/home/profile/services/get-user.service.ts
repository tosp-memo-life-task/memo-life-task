import { Injectable } from '@angular/core';
import { IGetProfileResponse } from '@memo-life-task/interfaces';
import { ApiService } from '../../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  constructor(private apiService: ApiService) {}

  async getUserApi(): Promise<IGetProfileResponse> {
    const response = await this.apiService.getUser();

    console.log(response);

    return response;
  }
}
