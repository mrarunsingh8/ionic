import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { UserProvider, userDataInterFace} from '../../providers/user/user';

import {UserDetailPage} from './user-detail';

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
})
export class UserPage {
  userData: userDataInterFace;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  	
  }

  ionViewDidLoad() {
  	this.userProvider.getUsers().subscribe(res => {
        this.userData = res;        
  	});
  }

  openUserDetail(userId: number) {
    this.navCtrl.push(UserDetailPage, {
      userId: userId
    });
  }
}