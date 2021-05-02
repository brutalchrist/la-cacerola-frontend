import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExercisesComponent } from './exercises.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', component: ExercisesComponent },
  { path: ':id/orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
