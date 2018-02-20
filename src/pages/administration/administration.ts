import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzaServiceProvider } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';
import { ModalController, ViewController } from 'ionic-angular';
import { AjouterPizzaPage } from '../ajouter-pizza/ajouter-pizza';

/**
 * Generated class for the AdministrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-administration',
    templateUrl: 'administration.html',
})
export class AdministrationPage {

    mypizza: Pizza = new Pizza;
    lapizzaforng: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public pizzaService: PizzaServiceProvider, public modalCtrl: ModalController) {
        this.pizzaService.get().then((data: Array<any>) => {
            this.lapizzaforng = data;
            console.log(this.lapizzaforng);
        });

        if(navParams.get('message') == 'isPosted'){
            console.log('Pizza ajoutée');
        }
    }

    openModal(oldPizza: Pizza) {
        let myModal;
        if(oldPizza != null){
            myModal = this.modalCtrl.create(AjouterPizzaPage, oldPizza);
        }
        else{
            myModal = this.modalCtrl.create(AjouterPizzaPage);
        }

        myModal.present();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AdministrationPage');
    }

    supprimerPizza(pizzaId: number){
        console.log('supprimerPizza');
        this.pizzaService.delete(pizzaId);
    }

}
