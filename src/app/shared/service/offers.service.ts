import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Offer } from '../model/offer.model'
import { OFFERS_URL_API } from '../url.api'

@Injectable()
export class OffersService {

    constructor(private http: HttpClient) {}

    private offers: Offer[]

    public getOffers(): Promise<Offer[]> {
        return this.http.get(`${OFFERS_URL_API}?spotlight=true`)
        .toPromise().then(
            (response: any) => {
                return Promise.resolve(response)
             }
        ).catch(err => {
            return Promise.reject(err.error || 'Server error');
        });
    }

    public getOffersByCategory(category: string): Promise<Offer[]> {
        return this.http.get(`${OFFERS_URL_API}?category=${category}`)
        .toPromise().then(
            (response: any) => {
                return Promise.resolve(response)
            }
        ).catch(err => {
            return Promise.reject(err.error || 'Server error');
        });
    }

    public getOffetById(id: number): Promise<Offer> {
        return this.http.get(`${OFFERS_URL_API}?id=${id}`)
        .toPromise().then((reponse: any) => {
            let offer = Promise.resolve(reponse).then((offers: Offer[]) => offers[0])
            return Promise.resolve(offer)
        })
        .catch(err => {
            return Promise.reject(err.error || 'Server error');
        });

    }
}