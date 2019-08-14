import { Component, OnInit } from '@angular/core';
import {RestauranteService} from 'app/restaurantes/restaurante.service';
import { Restaurante } from 'app/restaurantes/restaurante/restaurante.model';

import {ActivatedRoute} from  '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  restaurante: Restaurante
  constructor(private restauranteService: RestauranteService,
              private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.restauranteService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurante => this.restaurante= restaurante)
  }

}
