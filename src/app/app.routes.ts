import {Routes} from '@angular/router';
import {HomeComponent} from 'app/home/home.component';
import {AboutComponent} from 'app/about/about.component';
import {RestaurantesComponent} from './restaurantes/restaurantes.component';
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';
import {ReviewsComponent} from './restaurant-detail/reviews/reviews.component';
import {MenuComponent} from './restaurant-detail/menu/menu.component';
import {OrderComponent} from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const ROUTES: Routes = [

    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'order', component: OrderComponent},
    {path: 'restaurantes/:id', component: RestaurantDetailComponent,
    children:[{path: '', redirectTo: 'menu', pathMatch: 'full'},
    {path: 'order-summary', component:OrderSummaryComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'reviews', component: ReviewsComponent}
]
    }
]