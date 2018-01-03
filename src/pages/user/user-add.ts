import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams} from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { userItems, userInterFace, UserProvider } from '../../providers/user/user';
import { UserPage } from '../user/user';
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 export interface AlertInterface{
  title: string;
  subTitle: string;
  buttons: Array<any>;
}
@IonicPage()
@Component({
  selector: 'page-user-add',
  templateUrl: 'user-add.html',
})
export class UserAddPage {
	resData: userInterFace;
	userForm = null;
	userId: number = 0;
	userData: userItems = {
		name: '',
		email: '',
		username: '',
		password: '',
		cpassword: '',
		contact: '',
	};
	constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private userProvider: UserProvider, private alertCtrl: AlertController) {
		this.userId = this.navParams.data.userId;
	}

	ngOnInit(){
		this.userForm = this.formBuilder.group({
			name: [this.userData.name, [Validators.required]],
			email: [this.userData.email, [Validators.required]],
			username: [this.userData.username, [Validators.required]],
			password: [this.userData.password, [Validators.required]],
			cpassword: [this.userData.cpassword, [Validators.required]],
			contact: [this.userData.contact, [Validators.required]],
		});
	}

	ionViewDidLoad(){
		if(this.userId > 0){
			this.userProvider.getUser(this.userId).subscribe((res)=>{
				this.userData = res.response;
				this.userData.cpassword = this.userData.password;
			});
		}
	}

	formSubmit(){
	    if(this.userForm.valid === true){
	    	this.userData.name = this.userForm.value.name;
	    	this.userData.email = this.userForm.value.email;
	    	this.userData.username = this.userForm.value.username;
	    	this.userData.password = this.userForm.value.password;
	    	this.userData.contact = this.userForm.value.contact;
			
			if(this.userId > 0){
				this.editUser();
			}else{
				this.createUser();
			}
			
	    }else{
			console.log("Invalid ", this.userForm);
	    }
	}

	editUser(){
		this.userProvider.editUser(this.userData, this.userId).subscribe((res)=>{
			this.resData = res;
			if(res.error == null && res.status == 200){
				this.showAlert({
					title: 'Success!',
					subTitle: "User Updated successfully.",
					buttons: [{
						text: 'OK',
						handler: ()=>{
							this.showListPage();
						}
					}],
				});
			}else{
				this.showAlert({
					title: 'Error!',
					subTitle: res.message,
					buttons: ['OK'],
				});
			}
		});
	}

	createUser(){
		this.userProvider.createUser(this.userData).subscribe((res)=>{
			this.resData = res;
			if(res.error == null && res.status == 200){
				this.showAlert({
					title: 'Success!',
					subTitle: "New user added successfully.",
					buttons: [{
						text: 'OK',
						handler: ()=>{
							this.showListPage();
						}
					}],
				});
			}else{
				this.showAlert({
					title: 'Error!',
					subTitle: res.message,
					buttons: ['OK'],
				});
			}
		});
	}

	showListPage(){
		this.navCtrl.popTo(UserPage);
	}

	showAlert(alertData: AlertInterface) {
		let alert = this.alertCtrl.create(alertData);
		alert.present();
	}

}
