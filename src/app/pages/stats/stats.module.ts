import { NgModule } from '@angular/core';

import { StatsPageRoutingModule } from './stats-routing.module';

import { StatsPage } from './stats.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    StatsPageRoutingModule
  ],
  declarations: [StatsPage]
})
export class StatsPageModule {}
