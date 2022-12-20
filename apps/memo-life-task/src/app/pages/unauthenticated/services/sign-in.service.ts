import { Injectable } from '@angular/core';
import { SignInRequestBody, SignInResponse } from '@memo-life-task/dtos';
import { LocalStorageEnum } from '../../../common/enums/local-storage.enum';
import { ApiService } from '../../../common/services/api.service';
import { LocalStorageService } from '../../../common/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ) {}

  async callSignInApi(request: SignInRequestBody) {
    const response = await this.apiService.signIn(request);

    console.log(response);

    this.setLocalStorageValuesFromLoginResponse(response);

    return response;
  }

  private setLocalStorageValuesFromLoginResponse(response: SignInResponse) {
    this.localStorageService.setString(
      LocalStorageEnum.ACCESS_TOKEN,
      response.accessToken
    );
  }
}
