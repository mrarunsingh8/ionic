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
export interface userItems{
  id?: number;
  name?: string;
  email?: string;
  username?: string;
  password?: string;
  cpassword?: string;
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
    return this.http.get <userDataInterFace>(this.url, {headers: header}).map(res => {
      return res;
    });
  }

  getUser(userId): Observable<any>{
    return this.http.get <userInterFace>(this.url+"/"+userId).map(res => {
      return res;
    });
  }

  createUser(data): Observable<any>{
    return this.http.post <userItems>(this.url, data).map(res => {
      return res;
    });
  }

  editUser(data, userId): Observable<any>{
    return this.http.put <userItems>(this.url+"/"+userId, data).map(res => {
      return res;
    });
  }

  deleteUser(userId: number): Observable<any>{
    return this.http.delete <userItems> (this.url+"/"+userId).map(res=>{
      return res;
    });
  }

}
