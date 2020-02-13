import {NgModule} from '@angular/core';

import {StatMeasurementsPageRoutingModule} from './stat-measurements-routing.module';

import {StatMeasurementsPage} from './stat-measurements.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        StatMeasurementsPageRoutingModule
    ],
    declarations: [StatMeasurementsPage]
})
export class StatMeasurementsPageModule {
}
