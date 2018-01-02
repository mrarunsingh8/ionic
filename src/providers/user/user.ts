import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
 Generated class for the UserProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface userItems{
  id?: number;
  name?: string;
  email?: string;
  username?: string;
  password?: string;
  token?: string;
  tokenExpireIn?: string;
  contact?: string;
}
export interface userInterFace{
  rows?: number;
  error: string;
  status?: number;
  response?: userItems;
}
export interface userDataInterFace{
  rows?: number;
  error: string;
  status?: number;
  response?: userItems[];
}

@Injectable()
export class UserProvider{
	url: string = null;

	constructor(public http: HttpClient, private config: ConfigProvider) {
    this.url = config.getUserApiUrl();
  }

  getUsers(): Observable<any>{
	  var header : HttpHeaders;
    return this.http.get(this.url, {headers: header}).map(res => {
      return res;
    });
  }

  getUser(userId): Observable<any>{
    return this.http.get(this.url+"/"+userId).map(res => {
      return res;
    });
  }

}
