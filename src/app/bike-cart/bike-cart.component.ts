import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BikeCartService } from '../services/bike-cart.service';
import { Bike } from '../interfaces/Bike';

@Component({
  selector: 'app-bike-cart',
  templateUrl: './bike-cart.component.html',
  styleUrls: ['./bike-cart.component.scss']
})
export class BikeCartComponent implements OnInit {

  /*
  Creo una variable que va a ser el observable.
  Se le agrega el signo $ por convencion. Si lo tiene hay un observable por lo tanto hay que hacer un 
  pippe | en html por ejeplo: <li *ngFor="let bike of cartList$ | async">
  */
  cartList$: Observable<Bike[]>;

  /**cartService es el mismo que en la clase bike-list.component.ts */
  constructor(private cartService: BikeCartService) { 
    /*Lo declaro asi para que deje de observar y no lo tenga que hacer de forma manual cuando por ejemplo 
    cambio de pagina
    */
    this.cartList$ = cartService.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
