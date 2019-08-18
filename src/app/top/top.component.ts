import { Component, OnInit } from '@angular/core';

import { OffersService } from '../shared/service/offers.service'
import { Offer } from '../shared/model/offer.model'

import { Observable, Subject, of } from 'rxjs'

import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  providers: [OffersService]
})
export class TopComponent implements OnInit {

  public offers: Observable<Offer[]>

  public displayedOffers: Offer[]

  public searchOfOffers: Subject<string> = new Subject()

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offers = this.searchOfOffers.pipe(
      debounceTime(1000), // execute each 1 second
      distinctUntilChanged(), // execute if the term is different of previous one
      switchMap((term: string) => {

        // if term is empty
        if (term.trim() === '') {
          return of<Offer[]>([])
        }
        return this.offersService.searchOffers(term)
      }),
      catchError(
        (err: any) => {
          console.log(err)
          return of<Offer[]>([])
        }
      )
    )

    this.offers.subscribe(
      (offers: Offer[]) => this.displayedOffers = offers
    )
  }

  public  search(termOfSearch: string): void {
    this.searchOfOffers.next(termOfSearch)
  }

}
