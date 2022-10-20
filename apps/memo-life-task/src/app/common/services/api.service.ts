import { Injectable } from '@angular/core';
import { LocalStorageEnum } from '../enums/local-storage.enum';
import { AppException } from '../exceptions/app-error.exception';
import { BaseResponse } from '../models/base.response';
import { DataService } from './data.service';
import { LocalStorageService } from './local-storage.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root',
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

  /*  async loginUser(request: LoginRequest): Promise<LoginResponse> {
    let response = new LoginResponse();
    response = await this.dataService.post<LoginResponse>(
      this.urlService.getBaseUrl() + '/v1/auth/login',
      request,
      this.urlService.getHeaders()
    );
    return response;
  } */
}
