import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams} from 'ionic-angular';
import { UserProvider, userInterFace, userDataInterFace} from '../../providers/user/user';

import {UserDetailPage} from './user-detail';
import {UserAddPage} from "./user-add";

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
  deleteUserItem: userInterFace;

  userData: userDataInterFace;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider, private alertCtrl: AlertController) {
    
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

  openAddUser() {
    this.navCtrl.push(UserAddPage);
  }

  editUserPage(userId: number){
    this.navCtrl.push(UserAddPage, {userId: userId});
  }

  deleteUser(userId: number){
    //console.log("Delete No. : ", userId);
    this.showConfirm(userId);
  }

  showConfirm(userId: number) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure!',
      message: 'Did you want to Really delete this user?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.userProvider.deleteUser(userId).subscribe((res)=>{
              this.deleteUserItem = res;
              if(this.deleteUserItem.error == null && this.deleteUserItem.status == 200){
                let navCtrl = this.navCtrl;
                navCtrl.popToRoot().then(function(){
                  navCtrl.push(UserPage);
                });
              }
            });
          }
        }
      ]
    });
    confirm.present();
  }
}
