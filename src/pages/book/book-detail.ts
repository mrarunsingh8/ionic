import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { BookProvider, bookInterface } from '../../providers/book/book';


/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-book-detail',
  templateUrl: 'Book-detail.html',
})
export class BookDetailPage {
  public bookDetail: bookInterface;
  public isLoadedData: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private bookProvider: BookProvider) {
  	
  }

  ionViewDidLoad() {
  	this.bookProvider.getBook(this.navParams.data.bookId).subscribe(res => {
      this.isLoadedData = true;
      this.bookDetail = res;
  	});
  }

}