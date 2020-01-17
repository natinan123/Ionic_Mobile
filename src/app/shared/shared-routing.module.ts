import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MailComponent } from './mail/mail.component';
import { ProDetailComponent } from './pro-detail/pro-detail.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  {
    path: 'shared',
    children: [
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
        path: 'message/:pro_id',
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
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
