import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ErrorResponse } from '../models/error.response';
import { GetAccessTokenService } from './get-access-token.service';
import { LocalStorageEnum } from '../enums/local-storage.enum';
import { LocalStorageService } from './local-storage.service';
import { OverlayService } from '../progress-spinner/progress-spinner-overlay.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private httpClient: HttpClient,
    private overlayService: OverlayService,
    private getAccessTokenService: GetAccessTokenService,
    private localStorageService: LocalStorageService
  ) {}

  async get<T>(url: string, headers: any): Promise<T> {
    this.overlayService.setDisplayProgressSpinner(true);

    const getResult = await lastValueFrom<T>(
      this.httpClient.get<T>(url, { headers })
    )
      .catch(async (httpErrorMessage) => {
        await this.handleUnauthorized(httpErrorMessage, headers);
        return await lastValueFrom<T>(this.httpClient.get<T>(url, { headers }));
      })
      .catch((httpErrorMessage) => {
        throw this.handleError(httpErrorMessage);
      });

    this.overlayService.setDisplayProgressSpinner(false);
    return getResult;
  }
  async post<T>(url: string, body: any, headers: any): Promise<T> {
    this.overlayService.setDisplayProgressSpinner(true);

    const postResult = await lastValueFrom<T>(
      this.httpClient.post<T>(url, body, { headers: headers })
    )
      .catch(async (httpErrorMessage) => {
        await this.handleUnauthorized(httpErrorMessage, headers);
        return await lastValueFrom<T>(
          this.httpClient.post<T>(url, body, { headers: headers })
        );
      })
      .catch((httpErrorMessage) => {
        throw this.handleError(httpErrorMessage);
      });

    this.overlayService.setDisplayProgressSpinner(false);
    return postResult;
  }

  async delete<T>(url: string, body: any, headers: any): Promise<T> {
    this.overlayService.setDisplayProgressSpinner(true);

    const deleteResult = await lastValueFrom<T>(
      this.httpClient.delete<T>(url, { headers: headers, body: body })
    )
      .catch(async (httpErrorMessage) => {
        await this.handleUnauthorized(httpErrorMessage, headers);
        return await lastValueFrom<T>(
          this.httpClient.delete<T>(url, { headers: headers, body: body })
        );
      })
      .catch((httpErrorMessage) => {
        throw this.handleError(httpErrorMessage);
      });

    this.overlayService.setDisplayProgressSpinner(false);
    return deleteResult;
  }

  async patch<T>(url: string, body: any, headers: any): Promise<T> {
    this.overlayService.setDisplayProgressSpinner(true);

    const patchResult = await lastValueFrom<T>(
      this.httpClient.patch<T>(url, body, { headers: headers })
    )
      .catch(async (httpErrorMessage) => {
        await this.handleUnauthorized(httpErrorMessage, headers);
        return await lastValueFrom<T>(
          this.httpClient.patch<T>(url, body, { headers: headers })
        );
      })
      .catch((httpErrorMessage) => {
        throw this.handleError(httpErrorMessage);
      });

    this.overlayService.setDisplayProgressSpinner(false);
    return patchResult;
  }

  private async handleUnauthorized(
    httpErrorMessage: HttpErrorResponse,
    headers: any
  ) {
    if (headers.Authorization !== undefined && httpErrorMessage.status == 401) {
      await this.getAccessTokenService.refreshAccessToken();
      headers.Authorization =
        'Bearer ' +
        this.localStorageService.getString(LocalStorageEnum.ACCESS_TOKEN);
      return;
    }
    throw httpErrorMessage;
  }

  private handleError(httpErrorMessage: HttpErrorResponse): any {
    this.overlayService.setDisplayProgressSpinner(false);
    if (
      httpErrorMessage &&
      httpErrorMessage.error &&
      httpErrorMessage.error.code &&
      httpErrorMessage.error.message
    ) {
      const e = new ErrorResponse();
      e.code = httpErrorMessage.error.code;
      e.message = httpErrorMessage.error.message;
      return { error: e };
    } else {
      const e = new ErrorResponse();
      e.code = '-';
      e.message = `UNKNOWN_ERROR_RESPONSE`;
      e.info = httpErrorMessage;
      return { error: e };
    }
  }
}
