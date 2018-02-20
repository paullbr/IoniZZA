import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CartePage } from '../pages/carte/carte';
import { PanierPage } from '../pages/panier/panier';
import { DetailPage } from '../pages/detail/detail';
import { AdministrationPage } from '../pages/administration/administration';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PizzaServiceProvider } from '../providers/pizza-service/pizza-service';
import { HttpClientModule } from '@angular/common/http';
import {AjouterPizzaPage} from "../pages/ajouter-pizza/ajouter-pizza";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        CartePage,
        PanierPage,
        DetailPage,
        AdministrationPage,
        AjouterPizzaPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        CartePage,
        PanierPage,
        DetailPage,
        AdministrationPage,
        AjouterPizzaPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        PizzaServiceProvider
    ]
})
export class AppModule {}
