import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

  }
  openToledo(){
    let browser = this.iab.create('http://academia.vc/bodybuilder/', '_self', 'hidden=no');
    browser.show();
  }

  openMCR(){
    let browser = this.iab.create('http://academia.vc/bodybuildermcr/', '_self', 'hidden=no');
    browser.show();
  }


}
