import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path:'',
            loadChildren: () =>
            import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path:'',
            loadChildren: () =>
            import('../map/map.module').then(m => m.MapPageModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path:'',
            loadChildren: () =>
            import('../search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'wishlist',
        children: [
          {
            path:'',
            loadChildren: () =>
            import('../wishlist/wishlist.module').then(m => m.WishlistPageModule)
          }
        ]
      },
      {
        path: 'mail',
        children: [
          {
            path:'',
            loadChildren: () =>
            import('../mail/mail.module').then(m => m.MailPageModule)
          }
        ]
      },
      {
        path: 'favorite',
        children: [
          {
            path:'',
            loadChildren: () =>
            import('../favorite/favorite.module').then(m => m.FavoritePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
