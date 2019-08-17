import { Component, OnInit } from '@angular/core';

import { Offer } from '../shared/model/offer.model'
import { OffersService } from '../shared/service/offers.service'

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
  providers: [ OffersService ]
})
export class EntertainmentComponent implements OnInit {

  public offers: Offer[]

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offersService.getOffersByCategory("entertainment")
      .then( 
        (offers: Offer[]) => this.offers = offers // resolve
      // , err: any) => console.log(err) //reject (one way to do)
       )
       .catch((err: any) => console.log(err)) //reject (another way to do)
  }

}
