import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';
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

	constructor(public http: HttpClient, private config: ConfigProvider) {
		this.url = config.getBookApiUrl();
	}

	getAllBooks(): Observable<any>{
		return this.http.get<bookDataInterface>(this.url).map(res => {
			return res;
		});

	}
	getBook(bookId): Observable<any>{
		return this.http.get<bookInterface>(this.url+'/'+bookId).map(res => {
			return res;
		});
	}
}
