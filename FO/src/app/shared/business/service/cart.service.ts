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
        this.itemsInCartSubject.next([...this.itemsInCart, item]);
        this.getItems().subscribe(data => console.log(data));
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