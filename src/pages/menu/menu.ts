import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import {AboutPageModule} from "../about/about.module";
import { AboutPage } from '../about/about';
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(
    public app: App,
    public menu: MenuController,
    public navCtrl: NavController
  )
  {
    menu.enable(true);
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  showAbout(): void {
     this.navCtrl.push("AboutPage");
  }
  showModal(){
    this.navCtrl.push("ModalBasicPage");
  }
  showList(){
    this.navCtrl.push("ListBasicPage");
  }
  close() {
    this.menu.close();
  }
}
