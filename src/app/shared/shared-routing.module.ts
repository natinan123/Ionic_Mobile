import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MailComponent } from './mail/mail.component';
import { ProDetailComponent } from './pro-detail/pro-detail.component';


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
        path: 'favorite',
        component: FavoriteComponent
      },
      { // 
        path: 'prodetail/:pro_id',
        component: ProDetailComponent
      },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
