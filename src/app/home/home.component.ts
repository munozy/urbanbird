import { Component, OnInit } from '@angular/core';
import { OffersService } from '../shared/service/offers.service';
import { Offer } from '../shared/model/offer.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OffersService ]
})
export class HomeComponent implements OnInit {

  public offers: Offer[]

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offersService.getOffers().then(
      (offers: Offer[]) => this.offers = offers // resolve
     // , err: any) => console.log(err) //reject (one way to do)
      ).catch((err: any) => console.log(err)) //reject (another way to do)
  }

}
