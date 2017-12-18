import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BookProvider } from '../../providers/book/book';

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
	books: any;
	rows: number = 0;
	constructor(public navCtrl: NavController, public navParams: NavParams, private bookService: BookProvider) {
	}

  ionViewDidLoad() {
    /*this.bookService.getAllBooks().subscribe(res => {
    	if(res.status == 200 && res.error === null){
			this.books = res.response;
			this.rows = res.rows;
		}
    });*/
  }

}
