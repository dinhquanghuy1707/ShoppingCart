import { Component, OnInit } from '@angular/core';
import {
  CartService,
  WishListService
} from '../../../shared/business/service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  amount;
  wishList;
  cartList;
  constructor(
    private cartService: CartService,
    private wishListService: WishListService) {
  }

  ngOnInit() {
    this.cartService.getItems().subscribe(data => {
      this.amount = data.map(item => item.total).reduce((prev, next) => prev + next, 0);
      this.amount= (Math.round(this.amount * 100) / 100);
      this.cartList = data;
    });

    this.wishListService.getWishList().subscribe(data => this.wishList = data);
  }
}
