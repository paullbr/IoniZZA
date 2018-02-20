import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdministrationPage } from './administration';
import { AjouterPizzaPage } from '../ajouter-pizza/ajouter-pizza';

@NgModule({
    declarations: [
        AdministrationPage,
        AjouterPizzaPage
    ],
    imports: [
        IonicPageModule.forChild(AdministrationPage),
    ],
})
export class AdministrationPageModule {}
