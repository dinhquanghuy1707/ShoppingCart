import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models';


@Injectable()
export class WishListService {
    private itemsInWishListSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
    private itemsInWishList: CartItem[] = [];

    constructor() {
        this.itemsInWishListSubject.subscribe(_ => this.itemsInWishList = _);
    }

    addToWishList(item: CartItem) {
        if (this.itemsInWishList.indexOf(item)!=-1){
            return;
        }
        else {
            this.itemsInWishListSubject.next([...this.itemsInWishList, item]);
        }
        alert("Item successfully added to your wish list.");
    }

    getWishList(): Observable<CartItem[]> {
        return this.itemsInWishListSubject;
    }

    public removeWishList(item: CartItem) {
        const currentItems = [...this.itemsInWishList];
        const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
        this.itemsInWishListSubject.next(itemsWithoutRemoved);
    }
}