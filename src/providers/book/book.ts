import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceProvider } from '../api-service/api-service';
import 'rxjs/add/operator/map';

/*
  Generated class for the BookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookProvider {
	url: string = 'http://127.0.0.1:3000/api/book';
	token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pY29sIiwiaWF0IjoxNTEzMzEzNDk3LCJleHAiOjE1MTMzOTk4OTd9.mJwSiLynKpsPuIeLbMJvnV3MuD_nQl556ffv0tEo2HE';
	constructor(public http: HttpClient, private apiService: ApiServiceProvider) {
	console.log('Hello BookProvider Provider');
	}

	getAllBooks(){
		let myHeader = new HttpHeaders();
		myHeader = myHeader.set('Access-Control-Allow-Origin', '*')
			.set('Content-Type','application/json; charset=UTF-8')
			.set('Authorization',this.apiService.getAuthHeader())
			.set('token',this.token);

		return this.http.get(this.url, {headers: myHeader}).map(res => {
			return res;
		});

	}
}