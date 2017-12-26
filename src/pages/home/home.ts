import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from "@ionic/storage";

import { LoginPage } from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: Storage) {
  	this.manageLogin();
  }
  manageLogin(){
  	this.storage.get('isLogin').then((isLogin)=>{
  		if(isLogin !== 'true'){
  			this.navCtrl.push(LoginPage);
  		}
  	});
  }

}
