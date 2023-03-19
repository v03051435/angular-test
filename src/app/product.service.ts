import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() { }

  async getProducts(): Promise<Product[] | undefined> {
    let products: Array<Product> = [
      {
        id: 1,
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens'
      },
      {
        id: 2,
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
      },
      {
        id: 3,
        name: 'Phone Standard',
        price: 299,
        description: ''
      }
    ];
    console.log('étape 1');
    let res = await of(products).pipe(delay(2000)).toPromise();
    console.log('étape 2');

    return res;
  }
}