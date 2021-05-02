import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule, NzDescriptionsModule, NzDividerModule, NzListModule, NzButtonModule],
  declarations: [ProductsComponent],
  exports: [ProductsComponent]
})
export class ProductsModule { }
