import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ItemModule } from './ui-spa';
import { DateTimeModule } from './business/date-time';
import {
    CartService,
    ProductsService,
    WishListService,
    CommonService
} from './business/service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        ItemModule,
        DateTimeModule
    ],
    providers: [
        CartService,
        ProductsService,
        WishListService,
        CommonService
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
