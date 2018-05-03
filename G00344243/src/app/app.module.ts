import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule } from '@angular/common/http';
import {IonicStorageModule } from '@ionic/storage';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Insomnia } from '@ionic-native/insomnia' ;
import { Brightness } from '@ionic-native/brightness' ;

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { SettingsPage } from '../pages/settings/settings';
import { InformationPage } from '../pages/information/information';
import { NewsProvider } from '../providers/news/news';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
    SettingsPage,
    InformationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    SettingsPage,
    InformationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider,
    BatteryStatus,
    Insomnia,
    Brightness
  ]
})
export class AppModule {}
