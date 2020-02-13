import {NgModule} from '@angular/core';
;

import {NewMeasurementsPageRoutingModule} from './new-measurements-routing.module';

import {NewMeasurementsPage} from './new-measurements.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        NewMeasurementsPageRoutingModule
    ],
    declarations: [NewMeasurementsPage]
})
export class NewMeasurementsPageModule {
}
