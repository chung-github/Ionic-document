import { Component } from '@angular/core';

import { LoadingController } from 'ionic-angular';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'template.html'
})
export class BasicPage {
  constructor(public modalCtrl: ModalController, public loadingCtrl: LoadingController) { }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
    //loading
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      dismissOnPageChange: true
    }).present();
  }
}

@Component({
  templateUrl: 'modal-content.html'
})
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Forden',
        quote: 'Cầu thủ bóng đá hay nhất giải ngoại hạng tháng 4!',
        image: 'assets/imgs/phil-foden.png',
        items: [
          { title: 'Chiều cao', note: '1m80' },
          { title: 'Cân nặng', note: '80kg' },
          { title: 'IQ', note: '120IQ' }
        ]
      },
      {
        name: 'Bernardo Silva',
        quote: 'Cầu thủ bóng đá hay nhất giải ngoại hạng tháng 5!',
        image: 'assets/imgs/bernardo-silva.jpg',
        items: [
          { title: 'Chiều cao', note: '1m90' },
          { title: 'Cân nặng', note: '70kg' },
          { title: 'IQ', note: '112IQ' }
        ]
      },
      {
        name: 'Kevin De Bruyne',
        quote: 'Cầu thủ bóng đá hay nhất giải ngoại hạng tháng 6!',
        image: 'assets/imgs/kevin-de-bruyne.jpg',
        items: [
          { title: 'Chiều cao', note: '1m85' },
          { title: 'Cân nặng', note: '90kg' },
          { title: 'IQ', note: '125IQ' }
        ]
      },
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
