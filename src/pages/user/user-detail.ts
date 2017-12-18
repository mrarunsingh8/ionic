import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

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
  public userDetail:any;
  public rows: number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  	
  }

  ionViewDidLoad() {
  	/*this.userProvider.getUser().subscribe(res => {
        if(res.status == 200 && res.error === null){
          this.userDetail = res.response;
          this.rows = res.rows;
        }  		  
  	});*/
  }
  dismiss(){
  	this.navCtrl.pop();
  }
}