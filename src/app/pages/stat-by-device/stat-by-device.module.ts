import {NgModule} from '@angular/core';

import {StatByDevicePageRoutingModule} from './stat-by-device-routing.module';

import {StatByDevicePage} from './stat-by-device.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        StatByDevicePageRoutingModule
    ],
    declarations: [StatByDevicePage]
})
export class StatByDevicePageModule {
}
