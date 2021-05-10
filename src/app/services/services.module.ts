import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RestService } from './rest/rest.service';
import { ProductsService } from './products/products.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    RestService,
    ProductsService
  ]
})
export class ServicesModule { }
