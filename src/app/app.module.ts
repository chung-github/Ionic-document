import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {BasicPage as ModalBasicPage, ModalContentPage} from "../pages/modal/basic/pages";
import {BasicPage as NavigationBasicPage, NavigationDetailsPage} from "../pages/navigation/basic/pages";
import {MenuPage} from "../pages/menu/menu";
import { BasicPage as LoadingBasicPage} from "../pages/loading/basic/pages";
import { BasicPage as ListBasicPage} from "../pages/list/basic/pages";
import {BasicPage as FABsBasicPage} from "../pages/FABs/basic/pages";
import {BasicPage as ToggleBasicPage} from "../pages/toggle/basic/pages";
import {BasicPage as SegmentBasicPage} from "../pages/segment/basic/pages";
import {AboutPage} from "../pages/about/about";

@NgModule({
  declarations: [
    MyApp,
    ModalBasicPage,
    ModalContentPage,
    NavigationBasicPage,
    NavigationDetailsPage,
    MenuPage,
    LoadingBasicPage,
    ListBasicPage,
    FABsBasicPage,
    ToggleBasicPage,
    SegmentBasicPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
        statusbarPadding: true,
      },
      {
        links: [
          { component: ModalBasicPage, name: 'ModalBasicPage', segment: 'modal-basic' },
          { component: ModalContentPage, name: 'ModalContentPage', segment: 'modal-content' },
          { component: NavigationBasicPage, name: 'NavigationBasicPage', segment: 'navigation-basic' },
          { component: NavigationDetailsPage, name: 'NavigationDetailsPage', segment: 'navigation-details' },
          { component: MenuPage, name: 'MenuPage', segment: 'menu-basic' },
          { component: LoadingBasicPage, name: 'LoadingBasicPage', segment: 'loading-basic' },
          { component: ListBasicPage, name: 'ListBasicPage', segment: 'list-basic' },
          { component: FABsBasicPage, name: 'FABsBasicPage', segment: 'fabs-basic' },
          { component: ToggleBasicPage, name: 'ToggleBasicPage', segment: 'toggle-basic' },
          { component: SegmentBasicPage, name: 'SegmentBasicPage', segment: 'segment-basic' },
          { component: AboutPage, name: 'AboutPage', segment: 'about-basic' }
        ]
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModalBasicPage,
    ModalContentPage,
    NavigationBasicPage,
    NavigationDetailsPage,
    MenuPage,
    LoadingBasicPage,
    ListBasicPage,
    FABsBasicPage,
    ToggleBasicPage,
    SegmentBasicPage,
    AboutPage
  ],
  providers: [

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
