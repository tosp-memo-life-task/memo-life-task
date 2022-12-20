import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  getHeaders(): any {
    const headers: any = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
      'Accept-Language': 'hu-HU',
      Accept: 'application/json'
    };

    return headers;
  }

  getBaseUrl(): string {
    switch (environment.env) {
      case 'local':
        return 'http://localhost:3000/api';
      case 'prod':
        return 'http://localhost:3000/api';
      default:
        return 'http://localhost:3000/api';
    }
  }
}
