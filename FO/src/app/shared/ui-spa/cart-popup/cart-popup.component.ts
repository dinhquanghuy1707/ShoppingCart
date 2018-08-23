import { Component, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Product, CartItem } from '../../business/models';
import { CartService } from '../../business/service';

declare var $: any;

@Component({
    selector: 'app-cart-popup',
    templateUrl: 'cart-popup.component.html',
    styleUrls: ['./cart-popup.component.scss']
})

export class CartPopupComponent {
    @Input() product: Product;
    @ViewChild('appPopup') appPopup: any;
    quantity: number = 1;

    constructor(
        private cartService: CartService
    ) { }

    showModal() {
        this.appPopup.showModal();
    }

    dismissModal() {
        this.appPopup.dismissModal();
    }

    handleIncrease() {
        this.quantity++;
    }

    handleDecrease() {
        if (this.quantity > 1) this.quantity--;
    }

    handleAdd() {
        let cartItem: CartItem = this.product;
        cartItem.quantity = this.quantity;
        cartItem.total = this.quantity * this.product.price;

        this.cartService.addToCart(cartItem);
        
        this.quantity = 1;
        this.dismissModal();
    }
}
