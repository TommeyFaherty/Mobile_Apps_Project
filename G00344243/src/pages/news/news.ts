import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { Storage } from '@ionic/storage';

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

  theNews:any[]=[];
  myStatus: string;
  worldStatus: string;
  excitmentStats: string;
  accurateStats: string;
  feelingStats: string;
  anxiousStats: string;
  total: number;

  constructor(public navCtrl: NavController,public navParams:NavParams, private np:NewsProvider,private storage:Storage) {
  }

  //Read in news API
  ionViewDidLoad() {
    this.np.getNews().subscribe(data =>
      {
        this.theNews = data.articles;
      })
  }

  getStatusAndSave()
  {
    //Get average result 
    this.total = parseInt(this.worldStatus) + parseInt(this.excitmentStats) + parseInt(this.accurateStats) + parseInt(this.feelingStats) + parseInt(this.anxiousStats);
    this.total = Math.round(this.total/5);
    
    switch(this.total)
    {
      case 1:
      this.myStatus = "Sad";
      break;
      case 2: 
      this.myStatus = "Uneasy";
      break;
      case 3:
      this.myStatus = "Unphased";
      break;
      case 4:
      this.myStatus = "Pleased";
      break;
      case 5:
      this.myStatus = "Happy";
      break;
    } 
  }

  //Save status
  saveStatus()
  {
     //Save Status
    this.storage.set("myStatus",this.myStatus);
    this.navCtrl.pop();
  }

  //Get previous status
  ionViewWillEnter()
  {
    this.storage.get("myStatus")
    .then((data) =>
    {
      this.myStatus = data;
    })
   .catch((err) => {
    alert("Error accessing Storage")
  })
  }

}
