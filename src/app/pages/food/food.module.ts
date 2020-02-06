import { NgModule } from '@angular/core';

import { FoodPageRoutingModule } from './food-routing.module';

import { FoodPage } from './food.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    FoodPageRoutingModule
  ],
  declarations: [FoodPage]
})
export class FoodPageModule {}
