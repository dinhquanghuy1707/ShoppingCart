import { Injectable } from '@angular/core';
import { Product } from '../models';
@Injectable()
export class ProductsService {
    public getProducts(): Product[] {
        return this.products();
    }

    public getProduct(id: number): Product {
        return this
            .products()
            .find((item: Product) => {
                return item.id === id;
            });
    }

    private products(): Product[] {
        return <Product[]>[
            <Product>{ id: 1, name: 'Blue item', price: 123.09, img: "../../../../assets/img/iphone.png", description: "Blue" },
            <Product>{ id: 2, name: 'Green and gray', price: 99.09, img: "../../../../assets/img/iphone.png", description: "Green and gray" },
            <Product>{ id: 3, name: 'Green item', price: 99.09, img: "../../../../assets/img/iphone.png", description: "Blue" },
            <Product>{ id: 4, name: 'Blue and gray', price: 99.09, img: "../../../../assets/img/iphone.png", description: "Green and gray" },
            <Product>{ id: 5, name: 'Green and blue', price: 99.09, img: "../../../../assets/img/iphone.png", description: "Blue" },
            <Product>{ id: 6, name: 'Green and blue', price: 99.09, img: "../../../../assets/img/iphone.png", description: "Green and gray" },
            <Product>{ id: 7, name: 'Gray', price: 99.09, img: "../../../../assets/img/iphone.png", description: "Blue" },
            <Product>{ id: 8, name: 'Blue', price: 99.09, img: "../../../../assets/img/iphone.png", description: "Green and gray" },
            <Product>{ id: 9, name: 'All colors', price: 99.09, img: "../../../../assets/img/iphone.png", description: "Blue" },
        ];
    }
}