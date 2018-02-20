import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterPizzaPage } from './ajouter-pizza';

@NgModule({
  declarations: [
    AjouterPizzaPage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterPizzaPage),
  ],
})
export class AjouterPizzaPageModule {}
