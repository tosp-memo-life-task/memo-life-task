import { Injectable } from '@angular/core';
import { IListInvitationsResponse } from '@memo-life-task/interfaces';
import { ApiService } from '../../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class GetInvitaitionsService {
  constructor(private apiService: ApiService) {}

  async getInvitaitionsApi(): Promise<IListInvitationsResponse> {
    const response = await this.apiService.getInvitations();

    console.log(response);

    return response;
  }
}
