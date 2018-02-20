import {Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {PizzaServiceProvider} from '../../providers/pizza-service/pizza-service';
import {Pizza} from "../../models/pizza";

@Component({
    selector: 'page-panier',
    templateUrl: 'panier.html'
})
export class PanierPage {

    myPizza: Pizza = new Pizza();
    monPanier: Array<Pizza> = new Array<Pizza>();
    totalPanier: number;

    constructor(public navCtrl: NavController, public navParams: NavParams, public pizza: PizzaServiceProvider) {
        if(this.navParams.get('pizzaId') != null){
            this.pizza.getById(this.navParams.get('pizzaId')).then((data: Pizza) => {
                /*
                * J'obtiens une erreur 'push' on null reference. et n'ai pas réussi a débugger ce probleme
                * */
                this.myPizza = data;
                this.monPanier = JSON.parse(window.localStorage.getItem('monPanier'));
                this.monPanier.push(this.myPizza);
                this.majTotal();
                window.localStorage.setItem('monPanier', JSON.stringify(this.monPanier));
            });
        }
        else{
            //Calcul du total des prix
            this.monPanier = JSON.parse(window.localStorage.getItem('monPanier'));
            //this.majTotal();
        }
    }

    removePizza(id:number){
        this.pizza.getById(this.navParams.get('pizzaId')).then((data: Pizza) => {
            this.myPizza = data;
        });
        this.monPanier = JSON.parse(window.localStorage.getItem('monPanier'));
        let cpt = 0;
        let toDelete = 0;
        for(let unePizza of this.monPanier){
            if(unePizza.id == id){
               toDelete = cpt;
            }
            cpt++;
        }
        this.monPanier.splice(toDelete,1);
        this.majTotal();
        window.localStorage.setItem('monPanier', JSON.stringify(this.monPanier));
    }

    majTotal(){
        this.totalPanier = 0;
        for (let unePizza of this.monPanier){
            this.totalPanier = this.totalPanier + unePizza.price;
        }
    }
}