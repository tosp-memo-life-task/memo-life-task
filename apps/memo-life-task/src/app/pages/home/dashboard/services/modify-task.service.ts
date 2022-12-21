import { Injectable } from '@angular/core';
import {
  IModifyTaskRequestBody,
  IModifyTaskRequestParams
} from '@memo-life-task/interfaces';
import { ApiService } from '../../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ModifyTaskService {
  constructor(private apiService: ApiService) {}

  async modifyTaskApi(
    requestParams: IModifyTaskRequestParams,
    requestBody: IModifyTaskRequestBody
  ) {
    const response = await this.apiService.modifyTask(
      requestParams,
      requestBody
    );

    console.log(response);

    return response;
  }
}
