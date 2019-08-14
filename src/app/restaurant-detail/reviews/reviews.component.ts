import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import { RestauranteService } from 'app/restaurantes/restaurante.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>
  constructor(private restauranteService : RestauranteService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restauranteService.reviewsOfRestaurantes(this.route.parent.snapshot.params['id'])

  }

}
