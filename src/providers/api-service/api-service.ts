import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

	private username: string = "admin";
	private password: string = "admin";
	private token: string = '';
	private apiHeader = new HttpHeaders();
	constructor(private storage: Storage) {
		this.setDefaultHeader();
	}

	setDefaultHeader(){
		this.apiHeader = this.apiHeader.set('Access-Control-Allow-Origin', '*')
			.set('Content-Type','application/json; charset=UTF-8')
			.set('Authorization','Basic ' + btoa(this.username+':'+this.password))
			.set('token',this.token);
	}
	setHeader(key, value){
		this.apiHeader = this.apiHeader.set(key, value);
	}

	getHeader() {
	  	return {headers: this.apiHeader};
	}

}
