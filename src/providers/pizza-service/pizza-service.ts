import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../../models/pizza'


/*
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  */

@Injectable()
export class PizzaServiceProvider {

    results: string;

    private readonly url = "http://kim.jcatania.io:3000/pizza";

    constructor(private http: HttpClient)
    {
        console.log('Hello PizzaServiceProvider Provider');
    }

    sayHello(id: number){
        console.log("sayHello('" + id + "')");
    }

    get()
    {
        let rt: Array<Pizza> = new Array<Pizza>();
        return new Promise<Array<Pizza>>(
            resolve => {
                this.http.get(this.url).subscribe((data:Array<any>) => {
                    for(let i=0; i < data.length; i++){
                        rt.push(new Pizza(data[i]['id'], data[i]['name'], data[i]['desc'], data[i]['picture'], data[i]['price'], data[i]['ingredients']))
                    }
                    resolve(rt);});
            });
    }

    getById(id: Number)
    {
        let rt: Pizza = new Pizza();
        return new Promise<Pizza>(
            resolve => {
                this.http.get(this.url + "/" + id).subscribe((data:any) => {
                    let rt = new Pizza(data['id'], data['name'], data['desc'], data['picture'], data['price'], data['ingredients']);
                    resolve(rt);
                });
            });
    }

    post(pizza: Pizza){
        //let rt: Pizza = new Pizza();
        return new Promise<Pizza>(
            resolve => {
                this.http.post(this.url, pizza).subscribe((data:any) => {
                    let rt = new Pizza(data['name'], data['desc'], data['picture'], data['price'], data['ingredients']);
                    resolve(rt);
                });
            });
    }

    delete(id: number){
        let rt: Pizza = new Pizza();
        return new Promise<Pizza>(
            resolve => {
                this.http.delete(this.url +"/"+ id).subscribe((data:any) => {
                    let rt = new Pizza(data['id'], data['name'], data['desc'], data['picture'], data['price'], data['ingredients']);
                    resolve(rt);
                });
            });

    }

    update(pizza: Pizza, pizzaId: number){
        return new Promise<Pizza>(
            resolve => {
                this.http.put(this.url + "/" + pizzaId, pizza).subscribe((data:any) => {
                    let rt = new Pizza(data['name'], data['desc'], data['picture'], data['price'], data['ingredients']);
                    resolve(rt);
                });
            });
    }
}
