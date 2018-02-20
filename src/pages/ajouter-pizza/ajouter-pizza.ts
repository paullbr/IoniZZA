import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzaServiceProvider } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';
import {HttpClient} from "@angular/common/http";
import {AdministrationPage} from "../administration/administration";

/**
 * Generated class for the AjouterPizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-ajouter-pizza',
    templateUrl: 'ajouter-pizza.html'
})
export class AjouterPizzaPage {
    pizza: Pizza = new Pizza();
    constructor(public navCtrl: NavController, public navParams: NavParams, public pizzaService: PizzaServiceProvider, public  http: HttpClient) {
        if(navParams.get('id')){
            this.pizza.id = navParams.get('id');
            this.pizza.name = navParams.get('name');
            this.pizza.desc = navParams.get('desc');
            this.pizza.ingredients = navParams.get('ingredients');
            this.pizza.picture = navParams.get('picture');
            this.pizza.price = navParams.get('price');
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AjouterPizzaPage');
    }

    logForm(form) {
        console.log(form.value)
    }

    ajouterPizza(newPizza: Pizza){
        this.pizzaService.post(newPizza);

        this.navCtrl.push(AdministrationPage, {
            message: 'isPosted'
        });
    }

    modifierPizza(newPizza: Pizza){
        this.pizzaService.update(newPizza, newPizza.id);

        this.navCtrl.push(AdministrationPage, {
            message: 'isUpdated'
        });
    }

}
