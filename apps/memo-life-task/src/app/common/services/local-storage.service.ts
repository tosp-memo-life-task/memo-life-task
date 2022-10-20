import { Injectable } from '@angular/core';
import { LocalStorageEnum } from 'src/app/common/enums/local-storage.enum';
import { PermissionEnum } from 'src/app/common/enums/permission.enum';
import { AppException } from 'src/app/common/exceptions/app-error.exception';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private D = false;
  constructor() {}

  setString(key: LocalStorageEnum, value: string) {
    localStorage.setItem(key, value);
  }

  getString(key: LocalStorageEnum): string {
    let value = localStorage.getItem(key);
    if (!value) {
      throw new AppException('STRING_NOT_FOUND_IN_LOCAL_STORAGE');
    }
    return value;
  }

  setNumber(key: LocalStorageEnum, value: string) {
    localStorage.setItem(key, value);
  }

  getNumber(key: LocalStorageEnum): number {
    let value = localStorage.getItem(key);

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
    let value = !localStorage.getItem(key);
    if (!value) {
      throw new AppException('FLAG_NOT_FOUND_IN_LOCAL_STORAGE');
    }
    return localStorage.getItem('booleanString') === 'true';
  }

  setStringArray(key: LocalStorageEnum, value: Array<string>) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getStringArray(key: LocalStorageEnum): Array<string> {
    let value = localStorage.getItem(key);
    if (!value)
      throw new AppException('STRING_ARRAY_NOT_FOUND_IN_LOCAL_STORAGE');
    let parsedStringArray = JSON.parse(value);
    if (parsedStringArray instanceof Array === false)
      throw new AppException('STRING_ARRAY_TYPE_MISMATCH');

    return parsedStringArray;
  }

  getPermissionArray(key: LocalStorageEnum): Array<PermissionEnum> {
    let value = localStorage.getItem(key);
    if (!value)
      throw new AppException('STRING_ARRAY_NOT_FOUND_IN_LOCAL_STORAGE');
    let parsedStringArray: Array<any> = JSON.parse(value);
    if (parsedStringArray instanceof Array === false)
      throw new AppException('STRING_ARRAY_TYPE_MISMATCH');

    let enumArray = new Array<PermissionEnum>();
    for (const parsedString of parsedStringArray) {
      if (parsedString in PermissionEnum) {
        enumArray.push(parsedString);
      } else {
        throw new AppException('UNKNOWN_PERMISSION');
      }
    }
    return enumArray;
  }
}
