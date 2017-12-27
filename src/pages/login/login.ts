import {Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {LoginProvider, LoginInterface, LoginResponceInterface} from "../../providers/login/login";
import {Storage} from "@ionic/storage";
import {IonicPage, AlertController, NavController} from "ionic-angular";
import {HomePage} from "../../pages/home/home";
import {LocalStorageProvider} from "../../providers/http-interceptor/local-storage";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface AlertInterface{
  title: string;
  subTitle: string;
  buttons: Array<string>;
}
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	public loginForm= null;
	public loginData: LoginInterface = {
		username: '',
		password: ''
	};
	loginResponce: LoginResponceInterface;
	formInterceptor: any;

	constructor(private nav: NavController, private formBuilder: FormBuilder, private loginProvider: LoginProvider, private storage: Storage, private alertCtrl: AlertController, private localStorageProvider: LocalStorageProvider) {
		var self = this;
	    this.storage.get('isLogin').then(isLogin => {
	      if(this.localStorageProvider.getIsLogin()){
	        self.nav.setRoot(HomePage);
	      }
	    });
  }
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      userName: [this.loginData.username, [Validators.required, Validators.minLength(4)] ],
      password: [this.loginData.password, [Validators.required, Validators.minLength(4)] ],
    });
  }

  formSubmit(){
    if(this.loginForm.valid === true){
      this.loginData.username = this.loginForm.value.userName;
      this.loginData.password = this.loginForm.value.password;

      this.loginProvider.getAuth(this.loginData).subscribe(res=> {
        this.manageLogin(res);
      });
    }else{
      this.showAlert({
        title: 'Error!',
        subTitle: 'Please Enter Username And Password',
        buttons: ['OK']
      });
    }
  }

  manageLogin(data: LoginResponceInterface){
    if(data.success === true){
      this.localStorageProvider.setToken(data.token);
      this.localStorageProvider.setIsLogin(true);
      this.nav.setRoot(HomePage);
    }else{
      this.showAlert({
        title: 'Error!',
        subTitle: data.message,
        buttons: ['OK']
      });
    }
  }

  showAlert(alertData: AlertInterface) {
    let alert = this.alertCtrl.create(alertData);
    alert.present();
  }
}
