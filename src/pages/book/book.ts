import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { BookProvider, bookInterface, bookDataInterface } from '../../providers/book/book';
import { BookDetailPage } from './book-detail';
import { BookAddPage } from './book-add';
/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  deleteBookItem: bookInterface;
	public books: bookDataInterface;
	public isLoadedData: boolean = false;
	constructor(public navCtrl: NavController, public navParams: NavParams, private bookService: BookProvider, private alertCtrl: AlertController) {
	}

  ionViewDidLoad() {
    this.bookService.getAllBooks().subscribe(res => {
    	this.isLoadedData = true;
    	this.books = res;
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  openBookDetail(bookId: number){
  	this.navCtrl.push(BookDetailPage, {
  		bookId: bookId,
  	});
  }

  openAddBook() {
    this.navCtrl.push(BookAddPage);
  }

  editBookPage(bookId: number){
    this.navCtrl.push(BookAddPage, {bookId: bookId});
  }

  deleteBook(bookId: number){
    this.showConfirm(bookId);
  }

  showConfirm(bookId: number) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure!',
      message: 'Did you want to Really delete this book?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.bookService.deleteBook(bookId).subscribe((res)=>{
              this.deleteBookItem = res;
              if(this.deleteBookItem.error == null && this.deleteBookItem.status == 200){
                let navCtrl = this.navCtrl;
                navCtrl.popToRoot().then(function(){
                  navCtrl.push(BookPage);
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
