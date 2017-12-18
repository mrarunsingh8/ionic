import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceProvider } from '../api-service/api-service';
import 'rxjs/add/operator/map';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
	url: string = 'http://127.0.0.1:3000/api/user';
  token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pY29sIiwiaWF0IjoxNTEzNTk3MDQzLCJleHAiOjE1MTM2ODM0NDN9.MFAOEn6ght7uI_mNNHJgdjkhcNjGhQ8oHE6eGnL_N3M';
  constructor(public http: HttpClient, private apiService: ApiServiceProvider) {
    console.log('Hello UserProvider Provider');
  }

  getUsers(){
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.set('Access-Control-Allow-Origin', '*')
      .set('Content-Type','application/json; charset=UTF-8')
      .set('Authorization',this.apiService.getAuthHeader())
      .set('token',this.token);

    return this.http.get(this.url, {headers: myHeaders}).map(res => {
      return res;
    });
  }

  getUser(userId){
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
