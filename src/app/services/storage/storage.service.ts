import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  saveSessionStorage(key: string, value: any): void {
    sessionStorage.setItem(key, value);
  }
  getSessionStorageItem(key: string): any {
    return sessionStorage.getItem(key);
  }
  saveLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  }
  getLocalStorageItem(key: string): any {
    return localStorage.getItem(key);
  }
}
