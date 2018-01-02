import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { ConfigProvider } from '../config/config';


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface LoginInterface{
  username: string;
  password: string;
}

export interface LoginResponceInterface{
  success: boolean;
  message?: string;
  token?: string;
}

@Injectable()
export class LoginProvider {
  url: string = null;

  constructor(public http: HttpClient, private config: ConfigProvider) {
    this.url = config.getLoginApiUrl();
  }

  getAuth(data: LoginInterface): Observable<any>{
    return this.http.post <LoginResponceInterface>(this.url, data, {}).map(res => {
      return res;
    });
  }

}
