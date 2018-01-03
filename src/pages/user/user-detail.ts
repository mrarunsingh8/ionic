import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { UserProvider, userInterFace } from '../../providers/user/user';
import { UserAddPage } from '../user/user-add';

/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {
  public userDetail: userInterFace;
  public isLoadedData: boolean= false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  	
  }

  ionViewDidLoad() {
  	this.userProvider.getUser(this.navParams.data.userId).subscribe(res => {
      this.isLoadedData = true;
      this.userDetail = res;
  	});
  }

  editUserPage(userId: number){
    this.navCtrl.push(UserAddPage, {userId: userId});
  }

}