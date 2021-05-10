import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  edit(product: any): void {
    console.log('product :', product);
  }
}
