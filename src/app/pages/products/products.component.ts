import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products = [
    {
      name: 'Manzanas',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Malus-Idared.jpg/245px-Malus-Idared.jpg',
      price: 600,
      classification: 'kl'
    },
    {
      name: 'Berenjenas',
      image: 'https://www.ecured.cu/images/thumb/6/63/Ber1.jpg/260px-Ber1.jpg',
      price: 250,
      classification: 'unidad'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  edit(product: any): void {
    console.log('product :', product);
  }

}
