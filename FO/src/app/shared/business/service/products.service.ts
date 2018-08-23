import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models';
@Injectable()
export class ProductsService {

    constructor(private http: HttpClient) { }

    public getProducts(): Observable<any> {
        return this.http.get("../../../../assets/mockup/products.json").pipe(map((response: any) => response));
    }
}