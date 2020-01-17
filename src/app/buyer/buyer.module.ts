import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BuyerComponent } from './buyer.component';

import { BuytestComponent } from './buytest/buytest.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AgmCoreModule } from '@agm/core';
import { API } from '../map-API';

@NgModule({
  declarations: [
    BuyerComponent,
    BuytestComponent,

  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: API.GOOGLE_API_KEY,
      libraries: ['places', 'geometry', 'drawing']
    }),//google api
  ]
})
export class BuyerModule { }
