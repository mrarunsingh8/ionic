import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceProvider } from '../api-service/api-service';

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
export class UserProvider {
	url: string = 'http://127.0.0.1:3000/api/user';
  
  constructor(public http: HttpClient, private apiService: ApiServiceProvider) {
    console.log('Hello UserProvider Provider');
  }

 

  getUsers(): Observable<any>{
    return this.http.get(this.url, this.apiService.getHeader()).map(res => {
      return res;
    });
  }

  getUser(userId): Observable<any>{
    return this.http.get(this.url+"/"+userId, this.apiService.getHeader()).map(res => {
      return res;
    });
  }

}
