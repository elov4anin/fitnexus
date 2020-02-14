import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealPlannerPageRoutingModule } from './meal-planner-routing.module';

import { MealPlannerPage } from './meal-planner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealPlannerPageRoutingModule
  ],
  declarations: [MealPlannerPage]
})
export class MealPlannerPageModule {}
