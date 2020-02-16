import {NgModule} from '@angular/core';

import {MealPlannerPageRoutingModule} from './meal-planner-routing.module';

import {MealPlannerPage} from './meal-planner.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        MealPlannerPageRoutingModule
    ],
    declarations: [MealPlannerPage]
})
export class MealPlannerPageModule {
}
