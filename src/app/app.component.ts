import { Component } from '@angular/core';
import {Platform, ActionSheetController, AlertController} from 'ionic-angular';
import {BasicPage as ModalBasicPage} from "../pages/modal/basic/pages";
import {BasicPage as NavigationBasicPage} from "../pages/navigation/basic/pages";
// menu
import { BasicPage as MenuBasicPage } from '../pages/menu/basic/pages';
import {BasicPage as LoadingBasicPage} from "../pages/loading/basic/pages";
import {BasicPage as ListBasicPage} from "../pages/list/basic/pages";
import {BasicPage as FABsBasicPage} from "../pages/FABs/basic/pages";
import {BasicPage as ToggleBasicPage} from "../pages/toggle/basic/pages";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootModal: any = ModalBasicPage;
  rootNavigation: any = NavigationBasicPage;
  rootMenu: any = MenuBasicPage;
  rootLoading: any = LoadingBasicPage;
  rootList: any = ListBasicPage;
  rootFABs: any = FABsBasicPage;
  rootToggle: any = ToggleBasicPage;

  constructor(public platform: Platform,
              public actionsheetCtrl: ActionSheetController,
              public alerCtrl: AlertController
              ) {
  }

  startedModal(){

  }

}

