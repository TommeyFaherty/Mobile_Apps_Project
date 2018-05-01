import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NewsProvider } from './../../providers/news/news';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  news:any[]=[];
  constructor(public navCtrl: NavController, private np:NewsProvider) {
  }

  ionViewDidLoad() {
    this.np.getNews().subscribe(data =>
      {
        this.news = data.json();
        this.news = Array.of(this.news);
      })
  }

}
