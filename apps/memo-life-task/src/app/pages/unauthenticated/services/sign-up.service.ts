import { Injectable } from '@angular/core';
import { SignUpRequestBody, SignUpResponse } from '@memo-life-task/dtos';
import { LocalStorageEnum } from '../../../common/enums/local-storage.enum';
import { ApiService } from '../../../common/services/api.service';
import { LocalStorageService } from '../../../common/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ) {}

  async callSignUpApi(request: SignUpRequestBody) {
    const response = await this.apiService.signUp(request);

    console.log(response);

    this.setLocalStorageValuesFromLoginResponse(response);

    return response;
  }

  private setLocalStorageValuesFromLoginResponse(response: SignUpResponse) {
    this.localStorageService.setString(
      LocalStorageEnum.ACCESS_TOKEN,
      response.accessToken
    );
  }
}
