import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BatteryStatus, BatteryStatusResponse } from '@ionic-native/battery-status';
import { Insomnia } from '@ionic-native/insomnia';
import { Brightness } from '@ionic-native/brightness';

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
  insomniaCheck: boolean;
  brightnessNum: number;
  brightnessValue: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private batteryStatus: BatteryStatus,
    private insomnia: Insomnia,private brightness:Brightness) {
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

  //Turn on Insomnia Mode
  switchInsomnia()
  {
    console.log(3);
    console.log(this.insomniaCheck);

    if(this.insomniaCheck == true)
    {
      this.insomnia.keepAwake()
      .then(
       () => console.log('success'),
       () => console.log('error')
      );
    }
    else{
      this.insomnia.allowSleepAgain()
      .then(
      () => console.log('success'),
      () => console.log('error')
     );
    }
  }

  //Change brightness
  brightnessSlider()
  {
    //SetBrightness value must be between 1 and 0
    //So brightness is ranged from 0.1 - 1 giving it more than two options on the slider
    this.brightnessNum = this.brightnessValue/10;
    this.brightness.setBrightness(this.brightnessNum);
  }

}
