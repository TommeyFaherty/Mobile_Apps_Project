import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Insomnia } from '@ionic-native/insomnia';
import { Brightness } from '@ionic-native/brightness';
import { Flashlight } from '@ionic-native/flashlight';

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

  insomniaCheck: boolean;
  brightnessNum: number;
  brightnessValue: number;
  flashCheck: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private insomnia: Insomnia,private brightness:Brightness,private flashlight: Flashlight) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  //Turn on Insomnia Mode
  switchInsomnia()
  {

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

  //Turn on and off flashlight
  switchFlash()
  {
    this.flashlight.toggle();
    /*this.flashlight.available();
    if(this.flashCheck ==  true)
    {
      this.flashlight.switchOn();
    }
    else{
      this.flashlight.switchOff();
    }*/
  }

}
