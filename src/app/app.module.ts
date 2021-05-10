import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {BasicPage as ModalBasicPage, ModalContentPage} from "../pages/modal/basic/pages";
import {BasicPage as NavigationBasicPage, NavigationDetailsPage} from "../pages/navigation/basic/pages";
import { BasicPage as MenuBasicPage } from '../pages/menu/basic/pages';
import { PageOne as MenuPageOne } from '../pages/menu/basic/pages';
import { PageTwo as MenuPageTwo } from '../pages/menu/basic/pages';
import { PageThree as MenuPageThree } from '../pages/menu/basic/pages';
import { BasicPage as LoadingBasicPage} from "../pages/loading/basic/pages";
import { BasicPage as ListBasicPage} from "../pages/list/basic/pages";
import {BasicPage as FABsBasicPage} from "../pages/FABs/basic/pages";
import {BasicPage as ToggleBasicPage} from "../pages/toggle/basic/pages";

@NgModule({
  declarations: [
    MyApp,
    ModalBasicPage,
    ModalContentPage,
    NavigationBasicPage,
    NavigationDetailsPage,
    MenuBasicPage,
    MenuPageOne,
    MenuPageTwo,
    MenuPageThree,
    LoadingBasicPage,
    ListBasicPage,
    FABsBasicPage,
    ToggleBasicPage
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
          { component: MenuBasicPage, name: 'MenuBasicPage', segment: 'menu-basic' },
          { component: MenuPageOne, name: 'MenuPageOne', segment: 'menu-one' },
          { component: MenuPageTwo, name: 'MenuPageTwo', segment: 'menu-two' },
          { component: MenuPageThree, name: 'MenuPageThree', segment: 'menu-three' },
          { component: LoadingBasicPage, name: 'LoadingBasicPage', segment: 'loading-basic' },
          { component: ListBasicPage, name: 'ListBasicPage', segment: 'list-basic' },
          { component: FABsBasicPage, name: 'FABsBasicPage', segment: 'fabs-basic' },
          { component: ToggleBasicPage, name: 'ToggleBasicPage', segment: 'toggle-basic' }
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
    MenuBasicPage,
    MenuPageOne,
    MenuPageTwo,
    MenuPageThree,
    LoadingBasicPage,
    ListBasicPage,
    FABsBasicPage,
    ToggleBasicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
