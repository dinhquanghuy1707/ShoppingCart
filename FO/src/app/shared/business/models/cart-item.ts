import { Product } from './product';

export class CartItem extends Product {
    dateAdded?: Date;
    quantity?: number = 1;
    total?: number;
}