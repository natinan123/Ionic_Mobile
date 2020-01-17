import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'screen', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'screen',
    loadChildren: () => import('./screen/screen.module').then(m => m.ScreenPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule)
  },
  {
    path: 'buyer',
    loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule)
  },
  {
    path: 'seared',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
