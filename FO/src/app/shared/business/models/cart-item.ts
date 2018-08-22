import { Product } from './product'
export class CartItem extends Product {
    dateAdded?: Date;
    quantity?: number;
    total?: number;
}