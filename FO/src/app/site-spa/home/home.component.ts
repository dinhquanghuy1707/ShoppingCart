import { Component, OnInit } from '@angular/core';
import {
   ProductsService,
   CartService,
   WishListService
  } from '../../shared/business/service';
import { Product } from '../../shared/business/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listProduct: Product[] = [];
  constructor(
    private productsService: ProductsService,
    private wishListService: WishListService,
    private cartService: CartService) {
  }

  ngOnInit() {
    this.listProduct = this.productsService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  addToWishList(item: Product) {
    item.addDate = new Date();
    this.wishListService.addToWishList(item);
  }
}
