import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../business/models'

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss'],
})
export class WishItemComponent {

  @Input() product: Product;
  
  public getCurrency(): string {
    return 'usd';
  }
}
