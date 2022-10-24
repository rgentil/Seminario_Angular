import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Bike } from '../interfaces/Bike';

const URL = 'https://60be7ff7d03b43001792c8ed.mockapi.io/api/servicios';

@Injectable({
  providedIn: 'root'
})
export class BikeDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Bike[]>{
    /*Esto devuelve un observable, no devuelve una respuesta como el fetch*/
    /*Como la api no me trae el dato quantity tengo que agregarlo a mano usando pipe que me trae otro 
    observable. tap toca lo que viene para transformarlo y despues lo envia. */
    return this.http.get<Bike[]>(URL)
      .pipe(
        tap ( (bikes: Bike[]) => bikes.forEach(bike => { bike.quantity = 0 })
        )/*,
        tap ( (bikes: Bike[]) => bikes.forEach(bike => { bike.image = 'assets/img/s-epic-pro.webp' })
        )*/
      );
  }

}
