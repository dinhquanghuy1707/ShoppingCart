import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartComponent } from './cart.component';
import { CartRoutes } from './cart.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CartRoutes),
        FormsModule
    ],
    declarations: [CartComponent]
})

export class CartModule { }
