import {NgModule} from '@angular/core';

import {MyBookingsPageRoutingModule} from './my-bookings-routing.module';

import {MyBookingsPage} from './my-bookings.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        MyBookingsPageRoutingModule
    ],
    declarations: [MyBookingsPage]
})
export class MyBookingsPageModule {
}
