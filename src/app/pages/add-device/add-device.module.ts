import { NgModule } from '@angular/core';

import {AddDeviceRoutingModule} from './add-device-routing.module';

import { AddDevicePage } from './add-device.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    AddDeviceRoutingModule
  ],
  declarations: [AddDevicePage]
})
export class AddDeviceModule {}
