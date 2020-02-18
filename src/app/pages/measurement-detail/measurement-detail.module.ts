import {NgModule} from '@angular/core';

import {MeasurementDetailPageRoutingModule} from './measurement-detail-routing.module';

import {MeasurementDetailPage} from './measurement-detail.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        MeasurementDetailPageRoutingModule
    ],
    declarations: [MeasurementDetailPage]
})
export class MeasurementDetailPageModule {
}
