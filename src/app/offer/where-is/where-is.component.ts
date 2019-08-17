import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router'

import { OffersService } from '../../shared/service/offers.service'

@Component({
  selector: 'app-where-is',
  templateUrl: './where-is.component.html',
  styleUrls: ['./where-is.component.css'],
  providers: [OffersService]
})
export class WhereIsComponent implements OnInit {

  public whereIs: string

  constructor(private activatedRoute: ActivatedRoute, private offersService: OffersService) { }

  ngOnInit() {
    this.offersService.getWhereIsById(this.activatedRoute.parent.snapshot.params['id'])
      .then((whereIs: string) =>  this.whereIs = whereIs)
      .catch((err: any) => console.log(err))
  }

}
