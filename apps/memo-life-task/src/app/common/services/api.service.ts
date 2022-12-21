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
  IAcceptInvitationRequestParams,
  ICreateTaskRequestBody,
  IDeclineInvitationRequestParams,
  IDeleteWorkspaceRequestParams,
  IGetWorkspaceResponse,
  IListInvitationsResponse,
  IListWorkspacesResponse,
  IModifyTaskRequestBody,
  IModifyTaskRequestParams,
  IModifyWorkspaceRequestBody,
  IModifyWorkspaceRequestParams,
  IRemoveEditorRequestBody,
  IRemoveEditorRequestParams,
  IRevokeInvitationRequestBody,
  ISendInvitationRequestBody,
  IUpdateUserRequestBody
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
      this.urlService.getBaseUrl() + '/v1/workspace/list',
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

  async modifyWorkspace(
    requestParams: IModifyWorkspaceRequestParams,
    requestBody: IModifyWorkspaceRequestBody
  ) {
    const response = await this.dataService.patch(
      this.urlService.getBaseUrl() + '/v1/workspace/' + requestParams.id,
      requestBody,
      this.getHeadersWithToken()
    );
    return response;
  }

  async deleteWorkspace(request: IDeleteWorkspaceRequestParams) {
    console.log(request);

    const response = await this.dataService.delete(
      this.urlService.getBaseUrl() + '/v1/workspace/' + request.id,
      {},
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

  async createTask(request: ICreateTaskRequestBody) {
    const response = await this.dataService.post(
      this.urlService.getBaseUrl() + '/v1/task',
      request,
      this.getHeadersWithToken()
    );
    return response;
  }

  async modifyTask(
    requestParams: IModifyTaskRequestParams,
    requestBody: IModifyTaskRequestBody
  ) {
    const response = await this.dataService.patch(
      this.urlService.getBaseUrl() + '/v1/task/' + requestParams.id,
      requestBody,
      this.getHeadersWithToken()
    );
    return response;
  }

  async getInvitations(): Promise<IListInvitationsResponse> {
    const response = await this.dataService.get<IListInvitationsResponse>(
      this.urlService.getBaseUrl() + '/v1/invitation/list',
      this.getHeadersWithToken()
    );
    return response;
  }

  async acceptInvitation(request: IAcceptInvitationRequestParams) {
    const response = await this.dataService.post(
      this.urlService.getBaseUrl() + '/v1/invitation/' + request.id + '/accept',
      {},
      this.getHeadersWithToken()
    );
    return response;
  }

  async declineInvitation(request: IDeclineInvitationRequestParams) {
    const response = await this.dataService.delete(
      this.urlService.getBaseUrl() +
        '/v1/invitation/' +
        request.id +
        '/decline',
      {},
      this.getHeadersWithToken()
    );
    return response;
  }

  async removeEditor(
    requestParams: IRemoveEditorRequestParams,
    requestBody: IRemoveEditorRequestBody
  ) {
    const response = await this.dataService.patch(
      this.urlService.getBaseUrl() +
        '/v1/workspace/' +
        requestParams.id +
        '/remove-editor',
      requestBody,
      this.getHeadersWithToken()
    );
    return response;
  }

  async updateUser(request: IUpdateUserRequestBody) {
    const response = await this.dataService.patch(
      this.urlService.getBaseUrl() + '/v1/user',
      request,
      this.getHeadersWithToken()
    );
    return response;
  }
}
