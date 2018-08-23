import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../../business/models'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {

  @Input() product: CartItem;
  @Input() isCartItem: boolean = false;
  @Input() isWishListItem: boolean = false;

  @Output() onAdd: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLike: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onIncrease: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDecrease: EventEmitter<any> = new EventEmitter<any>();
  // quantity: number;

  ngOnInit() {
    // this.product.quantity ? this.product.quantity : 1;
  }
  public getCurrency(): string {
    return 'USD';
  }

  hanldeAdd() {
    this.onAdd.emit(this.product);
  }

  hanldeLike() {
    this.onLike.emit(this.product);
  }

  hanldeRemove() {
    this.onDelete.emit(this.product);
  }

  handleIncrease() {
    this.product.quantity++;
    this.product.total = this.product.price * this.product.quantity;
    this.onIncrease.emit(this.product);
  }

  handleDecrease() {
    if (this.product.quantity > 1) {
      this.product.quantity--;
      this.product.total = this.product.price * this.product.quantity;
    }
    this.onDecrease.emit(this.product);
  }
}
