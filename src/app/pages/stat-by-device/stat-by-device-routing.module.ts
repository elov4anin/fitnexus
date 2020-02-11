import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatByDevicePage } from './stat-by-device.page';

const routes: Routes = [
  {
    path: '',
    component: StatByDevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatByDevicePageRoutingModule {}
