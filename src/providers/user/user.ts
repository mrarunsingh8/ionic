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
  token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pY29sIiwiaWF0IjoxNTEzNjg0NTY2LCJleHAiOjE1MTM3NzA5NjZ9.guHvkvKpcAfKNlE6CdFgNyfePBPhFYj4ITeo4vrKBlA';
  constructor(public http: HttpClient, private apiService: ApiServiceProvider) {
    console.log('Hello UserProvider Provider');
  }

 

  getUsers(): Observable<any>{
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.set('Access-Control-Allow-Origin', '*')
      .set('Content-Type','application/json; charset=UTF-8')
      .set('Authorization',this.apiService.getAuthHeader())
      .set('token',this.token);

    return this.http.get(this.url, {headers: myHeaders}).map(res => {
      return res;
    });
  }

  getUser(userId): Observable<any>{
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.set('Access-Control-Allow-Origin', '*')
      .set('Content-Type','application/json; charset=UTF-8')
      .set('Authorization',this.apiService.getAuthHeader())
      .set('token',this.token);

    return this.http.get(this.url+"/"+userId, {headers: myHeaders}).map(res => {
      return res;
    });
  }

}
