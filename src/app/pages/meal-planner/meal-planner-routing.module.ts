import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealPlannerPage } from './meal-planner.page';

const routes: Routes = [
  {
    path: '',
    component: MealPlannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealPlannerPageRoutingModule {}
