import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {
	//private configDataArr: any;
	private ConfigUrl: string = "./config.json";

	constructor(public http: Http) {
		
	}

	getConfigArr(){
		return this.http.get(this.ConfigUrl).map(res => res.json());
	}

}
