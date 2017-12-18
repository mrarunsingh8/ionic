import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

import {UserDetailPage} from './user-detail';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface userItems{
  id?: number;
  name?: string;
  email?: string;
  username?: string;
  password?: string;
  token?: string;
  tokenExpireIn?: string;
  contact?: string;
}
interface userDataInterFace{
  rows?: number;
  error: string;
  status?: number;
  response?: userItems[];
  //response?: {id?: number, name?: string, email?: string, username?: string, password?: string, token?: string, tokenExpireIn?: string, contact?: string}[];
}

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  userData: userDataInterFace;
  public rows: number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  	
  }

  ionViewDidLoad() {
  	this.userProvider.getUsers().subscribe(res => {
        this.userData = res;
        /*if(this.userData.status == 200 && this.userData.error === null){
          //this.users = this.userData.response;
        }*/
  	});
  }
  goBack(){
  	this.navCtrl.pop();
  }

  openUserDetail(userId) {
    // That's right, we're pushing to ourselves!
    console.log("pppp", userId);
    /*this.navCtrl.push(UserDetailPage, {
      userId: userId
    });*/
  }
}