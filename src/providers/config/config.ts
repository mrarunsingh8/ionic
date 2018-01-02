import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
class ConfigMain{
	localUrl: string = 'http://localhost:3000/';
	liveUrl: string = 'http://192.168.3.20:3000/';
	isLive: boolean = false;
	modules: any = {
		login: 'authenticate',
		user: 'api/user',
		book: 'api/book',
	};

	constructor(){ }
}
@Injectable()
export class ConfigProvider extends ConfigMain{
	constructor() {
		super();
	}

	getApiBaseUrl(){
		return (this.isLive)?this.liveUrl:this.localUrl;
	}

	getLoginApiUrl(){
		return this.getApiBaseUrl()+this.modules.login;
	}
	getUserApiUrl(){
		return this.getApiBaseUrl()+this.modules.user;
	}
	getBookApiUrl(){
		return this.getApiBaseUrl()+this.modules.book;
	}

}
