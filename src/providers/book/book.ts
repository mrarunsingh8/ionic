import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceProvider } from '../api-service/api-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the BookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
interface BookItem{
	id?: number;
	bookname?: string;
	authorname?: string;
	version?: string;
	description?: string;
	price?: string;
}

export interface bookInterface{
	rows?: number;
	error: string;
	status?: number;
	response?: BookItem;
}

export interface bookDataInterface{
	rows?: number;
	error?: string;
	status?: number;
	response?: BookItem[];
}

@Injectable()
export class BookProvider {
	url: string = 'http://127.0.0.1:3000/api/book';
	token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pY29sIiwiaWF0IjoxNTEzNjg0NTY2LCJleHAiOjE1MTM3NzA5NjZ9.guHvkvKpcAfKNlE6CdFgNyfePBPhFYj4ITeo4vrKBlA';
	constructor(public http: HttpClient, private apiService: ApiServiceProvider) {
		console.log('Hello BookProvider Provider');
	}

	getAllBooks(): Observable<any>{
		let myHeader = new HttpHeaders();
		myHeader = myHeader.set('Access-Control-Allow-Origin', '*')
			.set('Content-Type','application/json; charset=UTF-8')
			.set('Authorization',this.apiService.getAuthHeader())
			.set('token',this.token);

		return this.http.get(this.url, {headers: myHeader}).map(res => {
			return res;
		});

	}
	getBook(bookId): Observable<any>{
		let myHeader = new HttpHeaders();
		myHeader = myHeader.set('Access-Control-Allow-Origin', '*')
			.set('Content-Type','application/json; charset=UTF-8')
			.set('Authorization',this.apiService.getAuthHeader())
			.set('token',this.token);

		return this.http.get(this.url+'/'+bookId, {headers: myHeader}).map(res => {
			return res;
		});
	}
}