import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
  //providers:[UserProvider],
})
export class UserPage {
  public users:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  	
  }

  ionViewDidLoad() {
  	this.userProvider.getUsers().subscribe(res => {
  		console.log(res);
  		this.users = res;
  	});
  }



  goBack(){
  	this.navCtrl.pop();
  }

}
