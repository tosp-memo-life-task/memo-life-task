import { Injectable } from '@angular/core';
import { LocalStorageEnum } from '../enums/local-storage.enum';

import { AppException } from '../../common/exceptions/app-error.exception';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private D = false;

  setString(key: LocalStorageEnum, value: string) {
    localStorage.setItem(key, value);
  }

  getString(key: LocalStorageEnum): string {
    const value = localStorage.getItem(key);
    if (!value) {
      throw new AppException('STRING_NOT_FOUND_IN_LOCAL_STORAGE');
    }
    return value;
  }

  setNumber(key: LocalStorageEnum, value: string) {
    localStorage.setItem(key, value);
  }

  getNumber(key: LocalStorageEnum): number {
    const value = localStorage.getItem(key);

    if (!value) {
      throw new AppException('NUMBER_NOT_FOUND_IN_LOCAL_STORAGE');
    }

    if (!/^[a-fA-F0-9]+$/.test(value))
      throw new AppException('STORED_VALUE_IS_NOT_A_NUMBER');
    return parseInt(value, 10);
  }

  setFlag(key: LocalStorageEnum, value: string) {
    localStorage.setItem(key, value);
  }

  getFlag(key: LocalStorageEnum): boolean {
    const value = !localStorage.getItem(key);
    if (!value) {
      throw new AppException('FLAG_NOT_FOUND_IN_LOCAL_STORAGE');
    }
    return localStorage.getItem('booleanString') === 'true';
  }

  setStringArray(key: LocalStorageEnum, value: Array<string>) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getStringArray(key: LocalStorageEnum): Array<string> {
    const value = localStorage.getItem(key);
    if (!value)
      throw new AppException('STRING_ARRAY_NOT_FOUND_IN_LOCAL_STORAGE');
    const parsedStringArray = JSON.parse(value);
    if (parsedStringArray instanceof Array === false)
      throw new AppException('STRING_ARRAY_TYPE_MISMATCH');

    return parsedStringArray;
  }
}
