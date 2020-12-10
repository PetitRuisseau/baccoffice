import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { HeadComponent } from './single-page/head/head.component';
import { AdvantagesComponent } from './single-page/advantages/advantages.component';
import { ExpertnessComponent } from './single-page/expertness/expertness.component';
import { PresentationComponent } from './single-page/presentation/presentation.component';
import { PricesComponent } from './single-page/prices/prices.component';
import { ContactComponent } from './single-page/contact/contact.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
    LegalNoticeComponent,
    HeadComponent,
    AdvantagesComponent,
    ExpertnessComponent,
    PresentationComponent,
    PricesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
