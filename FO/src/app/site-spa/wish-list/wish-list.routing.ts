import { Routes } from '@angular/router';

import { WishListComponent } from './wish-list.component';

export const WishListRoutes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: WishListComponent
        }]
    }
];
