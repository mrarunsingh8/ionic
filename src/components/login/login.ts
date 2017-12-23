import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  public loginForm= null;
  public userName: string = 'aerf';
  public password: string;
  
  formInterceptor: any;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
  		userName: [this.userName, Validators.required ],
  		password: [this.password, Validators.required ],
  	});
  }

  ngOnInit(){
  	
  }

  formSubmit(){
  	
  }


}
