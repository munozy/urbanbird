import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

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

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.offersService.getOffetById(params.id)
        .then((offer: Offer) => this.offer = offer)
        .catch((err: any) => console.log(err))
      }

    )
    
  }
}
