import { NgModule } from '@angular/core';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import {SharedModule} from "../../shared/shared.module";
import {NgCalendarModule} from "ionic2-calendar";

@NgModule({
  imports: [
    SharedModule,
    CalendarPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
