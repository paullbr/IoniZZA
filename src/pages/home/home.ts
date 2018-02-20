import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaServiceProvider } from '../../providers/pizza-service/pizza-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

mypizza: any;

  constructor(public navCtrl: NavController, private pizza: PizzaServiceProvider) {
    this.pizza.get().then((data: Array<any>) => {
      this.mypizza = data;
      console.log(this.mypizza);
    });
  }
}
