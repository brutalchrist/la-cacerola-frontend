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
  public selectedProduct: Product = new Product({});
  public drawerVisible = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  newProduct(): void {
    this.drawerVisible = true;
    this.selectedProduct = new Product({});
    console.log('selectedProduct :', this.selectedProduct);
  }

  editProduct(product: any): void {
    this.drawerVisible = true;
    this.selectedProduct = product;
    console.log('product:', product);
  }

  deleteProduct(product: any): void {
    console.log('delete:', product);
  }

  closeDrawer(): void {
    this.drawerVisible = false;
  }
}
