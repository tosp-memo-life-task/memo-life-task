import { Injectable } from '@angular/core';
import {
  GetWorkspaceRequestParams,
  GetWorkspaceResponse,
  SignInRequestBody,
  SignInResponse,
  SignUpRequestBody,
  SignUpResponse
} from '@memo-life-task/dtos';
import { LocalStorageEnum } from '../enums/local-storage.enum';
import { AppException } from '../exceptions/app-error.exception';
import { BaseResponse } from '../models/base.response';
import { DataService } from './data.service';
import { LocalStorageService } from './local-storage.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private dataService: DataService,
    private urlService: UrlService,
    private localStorageService: LocalStorageService
  ) {}

  private getHeadersWithToken(): any {
    const headers = this.urlService.getHeaders();
    try {
      headers.Authorization =
        'Bearer ' +
        this.localStorageService.getString(LocalStorageEnum.ACCESS_TOKEN);
      return headers;
    } catch (error) {
      if (error instanceof AppException) {
        throw new AppException('MISSING_PARAMS_IN_LOCALSTORAGE');
      }
    }
  }

  async signUp(request: SignUpRequestBody): Promise<SignUpResponse> {
    const response = await this.dataService.post<SignUpResponse>(
      this.urlService.getBaseUrl() + '/v1/auth/sign-up',
      request,
      this.urlService.getHeaders()
    );
    return response;
  }

  async signIn(request: SignInRequestBody): Promise<SignInResponse> {
    const response = await this.dataService.post<SignInResponse>(
      this.urlService.getBaseUrl() + '/v1/auth/sign-in',
      request,
      this.urlService.getHeaders()
    );
    return response;
  }

  async getWorkspaces(
    request: GetWorkspaceRequestParams
  ): Promise<GetWorkspaceResponse> {
    const response = await this.dataService.post<GetWorkspaceResponse>(
      this.urlService.getBaseUrl() + '/v1/',
      request,
      this.urlService.getHeaders()
    );
    return response;
  }
}
