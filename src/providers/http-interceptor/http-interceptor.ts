import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {LocalStorageProvider} from "./local-storage";

/*
  Generated class for the HttpInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpInterceptorProvider implements HttpInterceptor{
	private username: string = "admin";
	private password: string = "admin";

	constructor(private localStorageProvider: LocalStorageProvider){

	}

	intercept(req: HttpRequest<any>, hand: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*')});
    req = req.clone({ headers: req.headers.set('Content-Type','application/json; charset=UTF-8')});
		if(this.localStorageProvider.getIsLogin()){
      req = req.clone({ headers: req.headers.set('token', this.localStorageProvider.getToken())});
    }
		req = req.clone({ headers: req.headers.set('Authorization','Basic ' + btoa(this.username+':'+this.password)) });
		return hand.handle(req);
	}
}
