import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  Name: string;
  Age: string;
  Gender: string;
  Details: string = "Display";

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

    ionViewWillEnter() {
      //Load Name
      this.storage.get("Name")
      .then((data) =>
      {
        this.Name = data;
      })
      .catch((err) => {
      alert("Error accessing Storage")
      })

      //Load Gender
      this.storage.get("Gender")
      .then((data) =>
      {
        this.Gender = data;
      })
      .catch((err) => {
      alert("Error accessing Storage")
      })

      //Load Age
      this.storage.get("Age")
      .then((data) =>
      {
        this.Age = data;
      })
     .catch((err) => {
      alert("Error accessing Storage")
      })
    }
   // console.log('ionViewDidLoad InformationPage');
  }
