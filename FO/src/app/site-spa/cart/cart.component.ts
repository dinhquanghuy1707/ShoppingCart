import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import _ from "lodash";
import {
  WishListService,
  CartService,
  CommonService
} from '../../shared/business/service';
import {
  Product,
  CartItem,
  CartUser
} from '../../shared/business/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @ViewChild('userInfo') userModal: any;
  listProduct: CartItem[];
  user: CartUser = new CartUser();
  submited: boolean = false;
  orderInfo: any;

  constructor(
    private wishListService: WishListService,
    private cartService: CartService,
    public validationService: CommonService
  ) { }

  ngOnInit() {
    this.cartService.getItems().subscribe(
      data => this.listProduct = data);
  }

  handleDelete(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  handleLike(item: Product) {
    this.wishListService.addToWishList(item);
  }

  handleIncrease(item: CartItem) {
    this.cartService.addToCart(item);
  }

  handleDecrease(item: CartItem) {
    this.cartService.addToCart(item);
  }

  showUserModal() {
    this.userModal.showModal();
  }

  hideUserModal() {
    this.userModal.dismissModal();
  }

  shouldFormValid() {
    let model = this.user;
    return model.firstName && model.lastName && model.email && model.address && model.phone
      && this.validationService.validateEmail(model.email, true)
      && this.validationService.validatePhone(model.phone, true);
  }

  hanldeUserComfirm() {
    this.submited = true;
    if (!this.shouldFormValid()) return;

    this.orderInfo = {
      user: this.user,
      products: _.cloneDeep(this.listProduct)
    }

    this.hideUserModal();
  }
}
