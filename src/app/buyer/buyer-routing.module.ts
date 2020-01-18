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
import { MessageComponent } from '../shared/message/message.component';
import { ProDetailComponent } from '../shared/pro-detail/pro-detail.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { EditProfileComponent } from '../shared/edit-profile/edit-profile.component';


const routes: Routes = [
  {
    path: 'buyer',
    component: BuyerComponent,
    children: [
      { // หน้าหลัก
        path: 'test',
        component: BuytestComponent
      },
      { // 
        path: 'home',
        component: HomeComponent
      },
      { // 
        path: 'map',
        component: MapComponent
      },
      { // 
        path: 'search',
        component: SearchComponent
      },
      { // 
        path: 'wishlist',
        component: WishlistComponent
      },
      { // 
        path: 'mail',
        component: MailComponent
      },
      { // 
        path: 'message/:descination',
        component: MessageComponent
      },
      { // 
        path: 'favorite',
        component: FavoriteComponent
      },
      { // 
        path: 'prodetail/:pro_id',
        component: ProDetailComponent
      },
      { // 
        path: 'profile',
        component: ProfileComponent
      },
      { // 
        path: 'edit_profile',
        component: EditProfileComponent
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
