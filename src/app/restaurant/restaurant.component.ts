import { Component, OnInit } from '@angular/core';

import { Offer } from '../shared/model/offer.model'
import { OffersService } from '../shared/service/offers.service'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [ OffersService ]
})
export class RestaurantComponent implements OnInit {

  public offers: Offer[]

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offersService.getOffersByCategory("restaurant")
      .then( 
        (offers: Offer[]) => this.offers = offers // resolve
      // , err: any) => console.log(err) //reject (one way to do)
       )
       .catch((err: any) => console.log(err)) //reject (another way to do)
  }

}
