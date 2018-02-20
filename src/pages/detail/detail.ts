import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PizzaServiceProvider} from '../../providers/pizza-service/pizza-service';
import {Pizza} from '../../models/pizza';
import {PanierPage} from '../panier/panier';

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
})
export class DetailPage {
    myPizza: Pizza = new Pizza();

    constructor(public navCtrl: NavController, public navParams: NavParams, private pizza: PizzaServiceProvider) {
        this.pizza.getById(this.navParams.get('pizzaId')).then((data: Pizza) => {
            this.myPizza = data;
            console.log(this.myPizza);
        });
    }

    addToCart(id: Number){
        this.navCtrl.push(PanierPage, {
            pizzaId: id
        });
    }
}