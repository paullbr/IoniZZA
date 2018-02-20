import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaServiceProvider } from '../../providers/pizza-service/pizza-service';
import { DetailPage } from '../detail/detail';
import { PanierPage } from "../panier/panier";

@Component({
    selector: 'page-carte',
    templateUrl: 'carte.html'
})
export class CartePage {

    mypizza: any;

    constructor(public navCtrl: NavController, private pizza: PizzaServiceProvider) {
        this.pizza.get().then((data: Array<any>) => {
            this.mypizza = data;
            console.log(this.mypizza);
        });
    }

    openDetail(id: Number){
        this.navCtrl.push(DetailPage, {
            pizzaId: id
        });
    }

    addToCart(id: Number){
        this.navCtrl.push(PanierPage, {
            pizzaId: id
        });
    }
}