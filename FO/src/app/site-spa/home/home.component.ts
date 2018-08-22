import { Component, OnInit } from '@angular/core';
import {
   ProductsService,
   CartService,
   WishListService
  } from '../../shared/business/service';
import { 
  Product,
  CartItem
} from '../../shared/business/models';

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

  product: Product;
  showModal(product: Product) {
    this.product=product;
  }

  addToWishList(item: CartItem) {
    item.dateAdded = new Date();
    this.wishListService.addToWishList(item);
  }
}
