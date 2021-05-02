import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzListModule } from 'ng-zorro-antd/list';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { ExercisesComponent } from './exercises.component';

@NgModule({
  imports: [CommonModule, ExercisesRoutingModule, NzDescriptionsModule, NzDividerModule, NzListModule],
  declarations: [ExercisesComponent],
  exports: [ExercisesComponent]
})
export class ExercisesModule { }
