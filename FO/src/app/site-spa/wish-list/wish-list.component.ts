import { Component } from '@angular/core';
import { WishListService } from '../../shared/business/service';
import { Product } from '../../shared/business/models';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html'
})
export class WishListComponent {
  wishList: Product[];
  constructor(private wishListService: WishListService) {
  }

  ngOnInit() {
    this.wishListService.getWishList().subscribe(
      data => this.wishList = data);
  }
}
