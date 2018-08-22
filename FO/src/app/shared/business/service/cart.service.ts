import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../business/models';


@Injectable()
export class CartService {
    private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
    private itemsInCart: Product[] = [];

    constructor() {
        this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
    }

    addToCart(item: Product) {
        this.itemsInCartSubject.next([...this.itemsInCart, item]);
    }

    getItems(): Observable<Product[]> {
        return this.itemsInCartSubject;
    }
}