import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

	private username: string = "admin";
	private password: string = "admin";

	constructor(public http: Http) {
	console.log('Hello ApiServiceProvider Provider');
	}

	getAuthHeader() {
		return 'Basic ' + btoa(this.username+':'+this.password);
	}

}
