import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Offer } from '../shared/model/offer.model'
import { OffersService } from '../shared/service/offers.service'

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [OffersService]
})
export class OfferComponent implements OnInit {

  public offer: Offer

  constructor(private activatedRoute: ActivatedRoute, private offersService: OffersService) { }

  ngOnInit() {
    this.offersService.getOffetById(this.activatedRoute.snapshot.params['id'])
      .then((offer: Offer) =>  
      {
        console.log(offer)
        this.offer = offer
      })
      .catch((err: any) => console.log(err))
  }

}
