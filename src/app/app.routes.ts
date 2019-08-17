import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { EntertainmentComponent } from './entertainment/entertainment.component'
import { RestaurantComponent } from './restaurant/restaurant.component'
import { OfferComponent } from './offer/offer.component'
import { HowToUseComponent } from './offer/how-to-use/how-to-use.component'
import { WhereIsComponent } from './offer/where-is/where-is.component'

export const ROUTES: Routes = [
    { path: '', component:  HomeComponent},
    { path: 'entertainment', component:  EntertainmentComponent},
    { path: 'restaurant', component:  RestaurantComponent},
    { path: 'offer', component:  OfferComponent},
    { path: 'offer/:id', component:  OfferComponent,
        children: [
            { path: '', component:  HowToUseComponent},
            { path: 'how-to-use', component:  HowToUseComponent},
            { path: 'where-is', component:  WhereIsComponent}
        ]    
    }
]