import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './site-spa/home/home.module#HomeModule'
    },
    {
        path: 'cart',
        loadChildren: './site-spa/cart/cart.module#CartModule'
    },
    {
        path: 'wish-list',
        loadChildren: './site-spa/wish-list/wish-list.module#WishListModule'
    }
];