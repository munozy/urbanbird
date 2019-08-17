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
            .toPromise()
            .then((response: any) => response)
            .catch(err =>Promise.reject(err.error || 'Server error'))
    }

    public getOffersByCategory(category: string): Promise<Offer[]> {
        return this.http.get(`${OFFERS_URL_API}?category=${category}`)
            .toPromise()
            .then((response: any) => response)
            .catch(err =>Promise.reject(err.error || 'Server error'))
    }

    public getOffetById(id: number): Promise<Offer> {
        return this.http.get(`${OFFERS_URL_API}?id=${id}`)
            .toPromise()
            .then((response: any) => response[0])
            .catch(err =>Promise.reject(err.error || 'Server error'))
    }

    public getHowToUseById(id: number): Promise<string> {
        return this.http.get(`${OFFERS_URL_API}/${id}/how-to-use`)
            .toPromise()
            .then((response: any) => response[0].description)
            .catch(err =>Promise.reject(err.error || 'Server error'))
    }

    public getWhereIsById(id: number): Promise<string> {
        return this.http.get(`${OFFERS_URL_API}/${id}/where-is`)
            .toPromise()
            .then((response: any) => response[0].description)
            .catch(err =>Promise.reject(err.error || 'Server error'))
    }
}