import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MailComponent } from './mail/mail.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AgmCoreModule } from '@agm/core';
import { API } from '../map-API';
import { ProDetailComponent } from './pro-detail/pro-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    MapComponent,
    SearchComponent,
    WishlistComponent,
    MailComponent,
    FavoriteComponent,
    ProDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: API.GOOGLE_API_KEY,
      libraries: ['places', 'geometry', 'drawing']
    }),//google api
  ]
})
export class SharedModule { }
