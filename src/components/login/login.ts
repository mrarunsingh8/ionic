import {Component, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {LoginProvider, LoginInterface, LoginResponceInterface} from "../../providers/login/login";
import {Storage} from "@ionic/storage";
import {AlertController, Nav, NavController} from "ionic-angular";
import {HomePage} from "../../pages/home/home";

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export interface AlertInterface{
  title: string;
  subTitle: string;
  buttons: Array<string>;
}
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  @ViewChild(Nav) nav: Nav;
  public loginForm= null;
  public loginData: LoginInterface = {
    username: '',
    password: ''
  };
  loginResponce: LoginResponceInterface;
  formInterceptor: any;

  constructor(private formBuilder: FormBuilder, private loginProvider: LoginProvider, private storage: Storage, private alertCtrl: AlertController) {
    this.storage.get('isLogin').then(isLogin => {
      if(isLogin === 'true'){
        this.nav.setRoot(HomePage);
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
      this.storage.set('token', data.token);
      this.storage.set('isLogin', 'true');
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
