import { Component, OnInit } from '@angular/core';
import { BikeCartService } from '../services/bike-cart.service';
import { Bike } from '../interfaces/Bike';
import { BikeDataService } from '../services/bike-data.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.scss']
})

/*Controller. */
export class BikeListComponent implements OnInit {

  bikes: Bike[] = [];

  /* Mock */
  /*bikes: Bike[] = [
    {
    id: 1,
    maker: 'Specialized',
    model: 'S-Work Epic Pro',
    price: 9500,
    stock: 4,
    image: 'assets/img/s-epic-pro.webp',
    clearance: false,
    quantity: 0,    
    },
    {
    id: 2,
    maker: 'Specialized',
    model: 'S-Work Epic EVO',
    price: 14500,
    stock: 10,
    image: 'assets/img/s-work-epic-EVO.webp',
    clearance: true,
    quantity: 0,    
    },
    {
      id: 3,
      maker: 'Specialized',
      model: 'S-Work Epic',
      price: 13000,
      stock: 0,
      image: 'assets/img/s-work-epic.webp',
      clearance: false,
      quantity: 0,    
    },
  ]*/
  
  /*Se recibe por parametro el servicio y se usa inyeccion de dependencia,
  es como singleton, tengo solo una instancia del BikeCartService*/
  constructor(
    //Iyeccion de dependencia. Nunca se hace un new de un servicio, comando de creacion ng g s
    private cartService: BikeCartService,
    private bikeDataService: BikeDataService
    ) {

   }

  ngOnInit(): void {
    /*Cargo las Bikes que traigo desde mi servicio y las guardo en mi variable bikes local*/
    
    this.bikeDataService.getAll()
      .subscribe(bikesFromService => (this.bikes = bikesFromService))
    
  }

  maxReached(mensajeFromInputCompenent: string) {
    //debugger;
    alert(mensajeFromInputCompenent);
  }

  addToCart(bike: Bike): void{ 
    if(bike.quantity > 0){
      if(bike.quantity <= bike.stock){
        this.cartService.addToCart(bike);
        bike.stock -= bike.quantity;
        bike.quantity = 0;
      }else{
        alert("Está intentando agregar más productos que los que hay en stock");
      }
    }else{
      alert("Seleccione la cantidad para agregar al carrito");
    }
  }

}
