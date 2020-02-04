import { NgModule } from '@angular/core';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    CalendarPageRoutingModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
