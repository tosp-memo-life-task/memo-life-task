import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GetAccessTokenRequest } from '../dto/get-access-token.request';
import { GetAccessTokenResponse } from '../dto/get-access-token.response';
import { LocalStorageEnum } from '../enums/local-storage.enum';
import { LocalStorageService } from './local-storage.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root',
})
export class GetAccessTokenService {
  constructor(
    private httpClient: HttpClient,
    private urlService: UrlService,
    private localStorageService: LocalStorageService
  ) {}

  async refreshAccessToken(): Promise<void> {
    let request = new GetAccessTokenRequest();
    request.refreshToken = this.localStorageService.getString(
      LocalStorageEnum.REFRESH_TOKEN
    );

    let url = this.urlService.getBaseUrl() + '/v1/auth/get-access-token';

    const postResult = await lastValueFrom<GetAccessTokenResponse>(
      await this.httpClient.post<GetAccessTokenResponse>(url, request, {})
    );
    this.localStorageService.setString(
      LocalStorageEnum.ACCESS_TOKEN,
      postResult.accessToken
    );
  }
}
