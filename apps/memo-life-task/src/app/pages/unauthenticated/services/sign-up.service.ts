import { Injectable } from '@angular/core';
import { SignUpRequestBody } from '@memo-life-task/dtos';
import { ApiService } from '../../../common/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private apiService: ApiService) {}

  async callSignUpApi(request: SignUpRequestBody) {
    const response = await this.apiService.signUp(request);

    const temp = new SignUpRequestBody();

    console.log(request.email);

    console.log(response);

    return response;
  }
}
