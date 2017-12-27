import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from "../login/login";
import {LocalStorageProvider} from "../../providers/http-interceptor/local-storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private localStorageProvider: LocalStorageProvider) {
  	this.manageLogin();
  }
  manageLogin(){
  	if(!this.localStorageProvider.getIsLogin()){
  			this.navCtrl.push(LoginPage);
  	}
  }

}
