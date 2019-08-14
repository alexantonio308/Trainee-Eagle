import {Injectable} from '@angular/core';
import {Restaurante} from './restaurante/restaurante.model';


import {MEAT_API} from '../app.api';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ErrorHandler} from '../app.error-handler'

import {MenuItem} from 'app/restaurant-detail/menu-item/menu-item.model'

@Injectable()
export class RestauranteService{

    constructor(private http: Http){}

    restaurantes(): Observable<Restaurante[]> {
        return this.http.get(`${MEAT_API}/restaurantes`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurante>{
        console.log("Aqui")

        return this.http.get(`${MEAT_API}/restaurantes/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
    reviewsOfRestaurantes(id:string):Observable <any>{
        return this.http.get(`${MEAT_API}/restaurantes/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
  
      }
      menuOfRestaurante(id:String):Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurantes/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
      }
}