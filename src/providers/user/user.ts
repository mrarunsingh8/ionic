import { Http, Headers } from '@angular/http';
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
	url: string = 'http://localhost:3000/api/user';
  constructor(public http: Http, private httpClient: HttpClient, private apiService: ApiServiceProvider) {
    console.log('Hello UserProvider Provider');
  }

  

  getUsers(){    
    let myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');    
    //myHeaders.append('Authorization', 'Basic YWRtaW46YWRtaW4=');    
  	return this.http.get(this.url, {headers: myHeaders}).map(res => res.json())
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}
