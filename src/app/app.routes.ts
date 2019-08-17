import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { EntertainmentComponent } from './entertainment/entertainment.component'
import { RestaurantComponent } from './restaurant/restaurant.component'
import { OfferComponent } from './offer/offer.component'

export const ROUTES: Routes = [
    { path: '', component:  HomeComponent},
    { path: 'entertainment', component:  EntertainmentComponent},
    { path: 'restaurant', component:  RestaurantComponent},
    { path: 'offer', component:  OfferComponent},
    { path: 'offer/:id', component:  OfferComponent}
]