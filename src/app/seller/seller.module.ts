import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { TestingComponent } from './testing/testing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from '../shared/home/home.component';
import { MapComponent } from '../shared/map/map.component';
import { SearchComponent } from '../shared/search/search.component';
import { WishlistComponent } from '../shared/wishlist/wishlist.component';
import { MailComponent } from '../shared/mail/mail.component';
import { FavoriteComponent } from '../shared/favorite/favorite.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AgmCoreModule } from '@agm/core';
import { API } from '../map-API';


@NgModule({
  declarations: [
    SellerComponent,
    TestingComponent,

  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
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
export class SellerModule { }
