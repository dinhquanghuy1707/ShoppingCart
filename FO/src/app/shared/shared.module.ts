import {
    NgModule
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import {
    RouterModule
} from '@angular/router';



import {
    ItemModule
} from './ui-spa';
import {
    CartService,
    ProductsService,
    WishListService
} from './business/service'

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        ItemModule
    ],
    providers: [
        CartService,
        ProductsService,
        WishListService
    ],
    declarations: [
    ],
    exports: [
        FormsModule,
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        ItemModule
    ]
})

export class SharedModule { }
