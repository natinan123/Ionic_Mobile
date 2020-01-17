import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './buyer.component';

import { BuytestComponent } from './buytest/buytest.component';
import { HomeComponent } from '../shared/home/home.component';
import { MapComponent } from '../shared/map/map.component';
import { SearchComponent } from '../shared/search/search.component';
import { WishlistComponent } from '../shared/wishlist/wishlist.component';
import { MailComponent } from '../shared/mail/mail.component';
import { FavoriteComponent } from '../shared/favorite/favorite.component';


const routes: Routes = [
  {
    path: 'buyer',
    component: BuyerComponent,
    children: [
      { // หน้าหลัก
        path: 'test',
        component: BuytestComponent
      },
      { // หน้าหลัก
        path: 'home1',
        component: HomeComponent
      },
      { // 
        path: 'map1',
        component: MapComponent
      },
      { // 
        path: 'search1',
        component: SearchComponent
      },
      { // 
        path: 'wishlist1',
        component: WishlistComponent
      },
      { // 
        path: 'mail1',
        component: MailComponent
      },
      { // 
        path: 'favorite1',
        component: FavoriteComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: 'buyer/test',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
