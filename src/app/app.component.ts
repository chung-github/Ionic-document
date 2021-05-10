import {Component} from '@angular/core';
import {Platform, ActionSheetController, AlertController} from 'ionic-angular';
import {BasicPage as ModalBasicPage} from "../pages/modal/basic/pages";
import {BasicPage as NavigationBasicPage} from "../pages/navigation/basic/pages";
import {MenuPage} from "../pages/menu/menu";
import {BasicPage as LoadingBasicPage} from "../pages/loading/basic/pages";
import {BasicPage as ListBasicPage} from "../pages/list/basic/pages";
import {BasicPage as FABsBasicPage} from "../pages/FABs/basic/pages";
import {BasicPage as ToggleBasicPage} from "../pages/toggle/basic/pages";
import {BasicPage as SegmentBasicPage} from "../pages/segment/basic/pages";
import {AboutPage} from "../pages/about/about";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootModal: any = ModalBasicPage;
  rootNavigation: any = NavigationBasicPage;
  rootMenu: any = MenuPage;
  rootLoading: any = LoadingBasicPage;
  rootList: any = ListBasicPage;
  rootFABs: any = FABsBasicPage;
  rootToggle: any = ToggleBasicPage;
  rootSegment: any = SegmentBasicPage;
  rootAbout: any = AboutPage;

  constructor(public platform: Platform,
              public actionsheetCtrl: ActionSheetController,
              public alerCtrl: AlertController
              ) {
  }

}

