import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PopupModule } from '../popup';
import { CartPopupComponent } from './cart-popup.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        PopupModule
    ],
    declarations: [CartPopupComponent],
    exports: [CartPopupComponent]
})

export class CartPopupModule { }
