import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

import { ApiServiceProvider } from '../api-service/api-service';
/*
  Generated class for the HttpInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpInterceptorProvider implements HttpInterceptor{
	private username: string = "admin";
	private password: string = "admin";
	private apiHeader = new HttpHeaders();

	constructor(private storage: Storage){

	}

	intercept(req: HttpRequest<any>, hand: HttpHandler): Observable<HttpEvent<any>> {
		req.headers.set('Access-Control-Allow-Origin', '*');
		req.headers.set('Content-Type','application/json; charset=UTF-8');
		req = req.clone({ headers: req.headers.set('Authorization','Basic ' + btoa(this.username+':'+this.password)) });
		/*this.getAuth().then((res)=>{
			console.log(res);
		});*/
		return hand.handle(req);
		/*this.storage.get('token').then((token)=>{
			if(typeof token == 'string' && token.length > 4){
				req = req.clone({ headers: req.headers.set('token', token) });
			}
			return hand.handle(req);
		});		*/
	}

	getAuth(){  
		return this.storage.get('token');/*.then((toke) =>{
			console.log(toke);
			return toke;
		});*/
	}
}
