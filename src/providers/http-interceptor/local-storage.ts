import { Injectable } from '@angular/core';
/*
  Generated class for the HttpInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export interface StorageDataInterface{
  token: string;
  isLogin: boolean;
}
@Injectable()
export class LocalStorageProvider{

  data: StorageDataInterface= {
    token: null,
    isLogin: false,
  }
  constructor(){

	}

	private setLocalStorage(key:string, data:string){
    localStorage.setItem(key, data);
  }
  private getLocalStorage(key:string){
    return localStorage.getItem(key);
  }


	getToken(){
    return this.data.token = this.getLocalStorage('token');
  }
  getIsLogin(){
    return this.data.isLogin = (this.getLocalStorage('isLogin') == 'true')?true:false;
  }
  setToken(tokenStr: string){
    this.setLocalStorage('token', tokenStr);
  }
  setIsLogin(isLoginData: boolean){
    let issLoginTemp = (isLoginData)?'true':'false';
    this.setLocalStorage('isLogin', issLoginTemp);
  }

  logOut(){
    this.data.token=null;
    this.data.isLogin = false;
    this.setToken(this.data.token);
    this.setIsLogin(this.data.isLogin);
  }

}
