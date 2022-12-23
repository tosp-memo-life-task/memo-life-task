import { Injectable } from '@angular/core';
import { ICreateTaskRequestBody } from '@memo-life-task/interfaces';
import { ApiService } from '../../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CreateTaskService {
  constructor(private apiService: ApiService) {}

  async createTaskApi(request: ICreateTaskRequestBody) {
    const response = await this.apiService.createTask(request);

    console.log(response);

    return response;
  }
}
