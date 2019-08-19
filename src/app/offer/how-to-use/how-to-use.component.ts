import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Params } from '@angular/router'

import { OffersService } from '../../shared/service/offers.service'

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css'],
  providers: [OffersService]
})
export class HowToUseComponent implements OnInit {

  public howToUse: string

  constructor(private activatedRoute: ActivatedRoute, private offersService: OffersService) { }

  ngOnInit() {

    this.activatedRoute.parent.params.subscribe(
      (params: Params) => {
        this.offersService.getHowToUseById(params.id)
        .then((howToUse: string) => this.howToUse = howToUse)
        .catch((err: any) => console.log(err))
      }
    )
   
  }

}
