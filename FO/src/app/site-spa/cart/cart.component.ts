import { Component, OnInit } from '@angular/core';

import { Product } from '../../shared/business/models'
import {
  CartService
} from '../../shared/business/service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  itemsInCart: Product[] = [];

  constructor(
    private cartService: CartService) { }

  ngOnInit() {
    
  }
}
