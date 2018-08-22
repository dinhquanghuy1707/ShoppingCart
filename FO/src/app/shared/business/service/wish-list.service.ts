import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models';


@Injectable()
export class WishListService {
    private itemsInWishListSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
    private itemsInWishList: Product[] = [];

    constructor() {
        this.itemsInWishListSubject.subscribe(_ => this.itemsInWishList = _);
    }

    addToWishList(item: Product) {
        this.itemsInWishListSubject.next([...this.itemsInWishList, item]);
    }

    getWishList(): Observable<Product[]> {
        return this.itemsInWishListSubject;
    }
}