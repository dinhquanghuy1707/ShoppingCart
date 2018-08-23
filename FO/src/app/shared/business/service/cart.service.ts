import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../../business/models';


@Injectable()
export class CartService {
    private itemsInCartSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
    private itemsInCart: CartItem[] = [];

    constructor() {
        this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
    }

    addToCart(item: CartItem) {
        let objIndex = this.itemsInCart.indexOf(item);
        if (objIndex != -1) {
            this.itemsInCart[objIndex] = item;
            this.itemsInCartSubject.next([...this.itemsInCart]);
        }
        else {
            this.itemsInCartSubject.next([...this.itemsInCart, item]);
        }
    }

    getItems(): Observable<CartItem[]> {
        return this.itemsInCartSubject;
    }

    removeFromCart(item: CartItem) {
        const currentItems = [...this.itemsInCart];
        const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
        this.itemsInCartSubject.next(itemsWithoutRemoved);
    }
}