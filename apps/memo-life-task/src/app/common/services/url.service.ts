import { Injectable } from '@angular/core';
import { environment } from 'apps/memo-life-task/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  getHeaders(): any {
    const headers: any = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
      'Accept-Language': 'en',
      Accept: 'application/json',
    };

    return headers;
  }

  getBaseUrl(): string {
    switch (environment.env) {
      case 'local':
        return 'http://localhost:3000';
      case 'prod':
        return 'http://localhost:3000';
      default:
        return 'http://localhost:3000';
    }
  }
}
