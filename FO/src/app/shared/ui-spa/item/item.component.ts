import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../business/models'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {

  @Input() product: Product;

  @Output() onAdd: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLike: EventEmitter<any> = new EventEmitter<any>();

  public getCurrency(): string {
    return 'usd';
  }

  hanldeAdd() {
    this.onAdd.emit(this.product);
  }

  hanldeLike() {
    this.onLike.emit(this.product);
  }
}
