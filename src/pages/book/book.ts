import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BookProvider, bookDataInterface } from '../../providers/book/book';
import { BookDetailPage } from './book-detail';
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
	public books: bookDataInterface;
	public isLoadedData: boolean = false;
	constructor(public navCtrl: NavController, public navParams: NavParams, private bookService: BookProvider) {
	}

  ionViewDidLoad() {
    this.bookService.getAllBooks().subscribe(res => {
    	this.isLoadedData = true;
    	this.books = res;
    });
  }

  openBookDetail(bookId: number){
  	this.navCtrl.push(BookDetailPage, {
  		bookId: bookId,
  	});
  }

}
