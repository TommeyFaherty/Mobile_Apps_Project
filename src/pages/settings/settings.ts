import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  subscription: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private batteryStatus: BatteryStatus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    //Watch change in battery status
     this.subscription = this.batteryStatus.onChange().subscribe(status =>
    {
      console.log(status.level,status.isPlugged);
    });
  }

  ionViewWillLeave()
  {
    //Stop watch
    this.subscription.unsubscribe();
  }
  
}
