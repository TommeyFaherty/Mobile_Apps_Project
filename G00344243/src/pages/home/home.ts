import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { SettingsPage } from '../settings/settings';
import { InformationPage } from '../information/information';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  myStatus: string = "unKnown";
  Name: string;
  Gender: string;
  Age: string;

  constructor(public navCtrl: NavController,private storage:Storage) {
  }
  
  openNews(){
    this.navCtrl.push(NewsPage);
  }

  openSettings()
  {
    this.navCtrl.push(SettingsPage);
  }

  openInformation()
  {
    this.navCtrl.push(InformationPage);
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

  //Load Name
  this.storage.get("Name")
  .then((data) =>
  {
    this.Name = data;
  })
  .catch((err) => {
  alert("Error accessing Storage")
  })
  }

  saveDetails()
  {
    this.storage.set("Name",this.Name);
    this.storage.set("Gender",this.Gender);
    this.storage.set("Age",this.Age);
    //this.navCtrl.pop();
  }

}
