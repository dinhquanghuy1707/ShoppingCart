import { Component } from '@angular/core';
import {
  WishListService,
  CartService
} from '../../shared/business/service';
import { Product } from '../../shared/business/models';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls:['./wish-list.component.scss']
})
export class WishListComponent {
  wishList: Product[];
  constructor(
    private wishListService: WishListService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.wishListService.getWishList().subscribe(
      data => this.wishList = data);
  }

  product: Product;
  showModal(product: Product) {
    this.product = product;
  }

  handleDelete(product: Product) {
    this.wishListService.removeWishList(product);
  }
}
