import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams} from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { bookInterface, BookItem, BookProvider } from '../../providers/book/book';
import { BookPage } from '../book/book';
/**
 * Generated class for the bookPage page.
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
  selector: 'page-book-add',
  templateUrl: 'book-add.html',
})
export class BookAddPage {
	resData: bookInterface;
	bookForm = null;
	bookId: number = 0;
	bookData: BookItem = {
		bookname: '',
		authorname: '',
		version: '',
		description: '',
		price: '',
	};
	constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private bookProvider: BookProvider, private alertCtrl: AlertController) {
		this.bookId = this.navParams.data.bookId;
	}

	ngOnInit(){
		this.bookForm = this.formBuilder.group({
			bookname: [this.bookData.bookname, [Validators.required]],
			authorname: [this.bookData.authorname, [Validators.required]],
			version: [this.bookData.version, [Validators.required]],
			description: [this.bookData.description, [Validators.required]],
			price: [this.bookData.price, [Validators.required]],
		});
	}

	ionViewDidLoad(){
		if(this.bookId > 0){
			this.bookProvider.getBook(this.bookId).subscribe((res)=>{
				this.bookData = res.response;
			});
		}
	}

	formSubmit(){
	    if(this.bookForm.valid === true){
	    	this.bookData.bookname = this.bookForm.value.bookname;
	    	this.bookData.authorname = this.bookForm.value.authorname;
	    	this.bookData.version = this.bookForm.value.version;
	    	this.bookData.description = this.bookForm.value.description;
	    	this.bookData.price = this.bookForm.value.price;
			
			if(this.bookId > 0){
				this.editBook();
			}else{
				this.createBook();
			}
			console.log("Invalid ", this.bookForm.value);
	    }else{
			console.log("Invalid ", this.bookForm);
	    }
	}

	editBook(){
		this.bookProvider.editBook(this.bookData, this.bookId).subscribe((res)=>{
			this.resData = res;
			if(res.error == null && res.status == 200){
				this.showAlert({
					title: 'Success!',
					subTitle: "book Updated successfully.",
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

	createBook(){
		this.bookProvider.createBook(this.bookData).subscribe((res)=>{
			this.resData = res;
			if(res.error == null && res.status == 200){
				this.showAlert({
					title: 'Success!',
					subTitle: "New book added successfully.",
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
		let self = this;
		this.navCtrl.popToRoot().then(function(){
          self.navCtrl.push(BookPage);
        });
	}

	showAlert(alertData: AlertInterface) {
		let alert = this.alertCtrl.create(alertData);
		alert.present();
	}

}
