import { Component, Input, EventEmitter, Output } from '@angular/core';

import {
  CartService,
  WishListService
} from '../../business/service'
import { Product } from '../../business/models'

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss'],
})
export class WishItemComponent {

  @Input() product: Product;
  @Output() onAdd: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() onDelete: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(
    private cartService: CartService,
    private wishListService: WishListService
  ) { }

  public getCurrency(): string {
    return 'usd';
  }

  handleAdd() {
    this.onAdd.emit(this.product);
    // this.cartService.addToCart(this.product);
  }

  hanldeDelete() {
    this.wishListService.removeWishList(this.product);
  }
}
