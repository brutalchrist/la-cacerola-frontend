import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/classes/product';

import { RestService } from 'src/app/services/rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private prefix = '/products';

  constructor(@Inject(RestService) private rest: RestService) {}

  public getProducts(): Observable<Product[]> {
    const products = [
      new Product({
        name: 'Manzanas',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Malus-Idared.jpg/245px-Malus-Idared.jpg',
        price: 600,
        measureUnit: 'kl'
      }),
      new Product({
        name: 'Berenjenas',
        image: 'https://www.ecured.cu/images/thumb/6/63/Ber1.jpg/260px-Ber1.jpg',
        price: 250,
        measureUnit: 'unidad'
      }),
    ];

    return new Observable<Product[]>(observe => {
      observe.next(products);
      observe.complete();
    });
  }
}