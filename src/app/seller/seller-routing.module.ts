import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerComponent } from './seller.component';
import { HomeComponent } from '../shared/home/home.component';
import { MapComponent } from '../shared/map/map.component';
import { SearchComponent } from '../shared/search/search.component';
import { WishlistComponent } from '../shared/wishlist/wishlist.component';
import { MailComponent } from '../shared/mail/mail.component';
import { FavoriteComponent } from '../shared/favorite/favorite.component';
import { ProDetailComponent } from '../shared/pro-detail/pro-detail.component';
import { EditProfileComponent } from '../shared/edit-profile/edit-profile.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { MessageComponent } from '../shared/message/message.component';
import { ProYouComponent } from './pro-you/pro-you.component';


const routes: Routes = [
  {
    path: 'seller',
    component: SellerComponent,
    children: [
      { // หน้าหลัก
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
        path: 'pro_you',
        component: ProYouComponent
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
      {
        path: '',
        redirectTo: 'seller/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'seller/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
