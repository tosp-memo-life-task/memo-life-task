import { Injectable } from '@angular/core';
import {
  CreateWorkspaceRequestBody,
  CreateWorkspaceResponse,
  SignInRequestBody,
  SignInResponse,
  SignUpRequestBody,
  SignUpResponse
} from '@memo-life-task/dtos';
import {
  IGetWorkspaceResponse,
  IListWorkspacesResponse,
  IRevokeInvitationRequestBody,
  ISendInvitationRequestBody
} from '@memo-life-task/interfaces';
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

  async getWorkspaces(): Promise<IListWorkspacesResponse> {
    const response = await this.dataService.get<IListWorkspacesResponse>(
      this.urlService.getBaseUrl() + '/v1/workspace',
      this.getHeadersWithToken()
    );
    return response;
  }

  async createWorkspace(
    request: CreateWorkspaceRequestBody
  ): Promise<CreateWorkspaceResponse> {
    const response = await this.dataService.post<CreateWorkspaceResponse>(
      this.urlService.getBaseUrl() + '/v1/workspace',
      request,
      this.getHeadersWithToken()
    );
    return response;
  }

  async getWorkspace(workspaceId: number): Promise<IGetWorkspaceResponse> {
    const response = await this.dataService.get<IGetWorkspaceResponse>(
      this.urlService.getBaseUrl() + '/v1/workspace/' + workspaceId,
      this.getHeadersWithToken()
    );
    return response;
  }

  async sendInvite(request: ISendInvitationRequestBody) {
    console.log(request);

    const response = await this.dataService.post(
      this.urlService.getBaseUrl() + '/v1/invitation',
      request,
      this.getHeadersWithToken()
    );
    return response;
  }

  async revokeInvite(request: IRevokeInvitationRequestBody) {
    console.log(request);

    const response = await this.dataService.delete(
      this.urlService.getBaseUrl() + '/v1/invitation/revoke',
      request,
      this.getHeadersWithToken()
    );

    return response;
  }
}
