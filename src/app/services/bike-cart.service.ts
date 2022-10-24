import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bike } from '../interfaces/Bike';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio maneja la logica del carrito de compras.
 * Notar la notacion Injectable para realiazr inyeccion de dependencia y usar siempre la misma instancia de la clase
 *
 */
export class BikeCartService {

  /*Declaro una variable privada para ser observada porque si dejo la original cartList el declararla
    BehaviorSubject la variable a ser observada pasa a ser privada
  */
  private _cartList: Bike[] = [];
  
  /*Lo declaro BehaviorSubject pero aca no le estoy diciendo que se aplique el patron lo 
  hago en el .next luego de que el valor haya sido modificado
  */
  cartList: BehaviorSubject<Bike[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(bike: Bike) {
    //Pregunto si la bici esta en la lista aumento la cantidad sino esta la agrego
    let item: Bike = this._cartList.find(
      (bikeInCartList) =>
        (bikeInCartList.model == bike.model && bikeInCartList.maker == bike.maker)
    )!;//Se agrega ! para darle un valor indefinido, sino da error.
    if (!item) {
      /* {... bike} significa que me de bike pero un nuevo objeto, puedo cambiarle por ejemplo
       {name: 'bike1' ... bike} y me da un nuevo objeto bike con el nombre bike1.
       Me clona el objeto.
      */
      this._cartList.push({ ...bike });
    }else{
      item.quantity += bike.quantity;
    }
    /*Digo que mi valor ha cambiado para que sea actualizados por los que observan este observable, para
    los que se suscriben.
    Equivale al emmit del evento
    */
    this.cartList.next(this._cartList);
  }
}
