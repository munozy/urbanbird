import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

import { ROUTES } from './app.routes';
import { OfferComponent } from './offer/offer.component';
import { HowToUseComponent } from './offer/how-to-use/how-to-use.component';
import { WhereIsComponent } from './offer/where-is/where-is.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    TopComponent,
    EntertainmentComponent,
    RestaurantComponent,
    OfferComponent,
    HowToUseComponent,
    WhereIsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
