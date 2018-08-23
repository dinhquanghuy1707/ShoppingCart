import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    ItemModule,
    PopupModule
} from '../../shared/ui-spa';
import { CartComponent } from './cart.component';
import { CartRoutes } from './cart.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CartRoutes),
        FormsModule,

        ItemModule,
        PopupModule
    ],
    declarations: [CartComponent]
})

export class CartModule { }
