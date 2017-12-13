import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceProvider } from '../api-service/api-service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
	url: string = 'http://localhost:3000/api/user';//'https://jsonplaceholder.typicode.com/posts/1';//http://localhost:3000/api/user
  constructor(public http: Http, private httpClient: HttpClient, private apiService: ApiServiceProvider) {
    console.log('Hello UserProvider Provider');
  }



  getUsers(){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    let options = new RequestOptions({
      method: RequestMethod.Get,
      url:this.url,
      headers: myHeaders
    });
  	return this.http.get(this.url, options).map(res => res.json());
  }

}
