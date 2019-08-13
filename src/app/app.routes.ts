import {Routes} from '@angular/router';
import {HomeComponent} from 'app/home/home.component';
import {AboutComponent} from 'app/about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';


export const ROUTES: Routes = [

    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restaurantes', component: RestaurantesComponent}

]