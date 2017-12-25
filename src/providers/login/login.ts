import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ApiServiceProvider} from "../api-service/api-service";

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
  url: string = 'http://127.0.0.1:3000/authenticate';

  constructor(public http: HttpClient, private apiService: ApiServiceProvider) {

  }

  getAuth(data: LoginInterface): Observable<any>{

    return this.http.post <LoginResponceInterface>(this.url, JSON.stringify(data), this.apiService.getHeader()).map(res => {
      return res;
    });
  }



}
