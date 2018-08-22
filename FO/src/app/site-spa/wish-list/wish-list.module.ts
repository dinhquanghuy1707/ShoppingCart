import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItemModule } from '../../shared/ui-spa'

import { WishListComponent } from './wish-list.component';
import { WishListRoutes } from './wish-list.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(WishListRoutes),
        FormsModule,
        WishItemModule
    ],
    declarations: [WishListComponent]
})

export class WishListModule { }
