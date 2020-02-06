import { NgModule } from '@angular/core';

import { RatingPageRoutingModule } from './rating-routing.module';

import { RatingPage } from './rating.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    RatingPageRoutingModule
  ],
  declarations: [RatingPage]
})
export class RatingPageModule {}
