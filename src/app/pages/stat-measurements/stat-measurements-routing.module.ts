import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatMeasurementsPage } from './stat-measurements.page';

const routes: Routes = [
  {
    path: '',
    component: StatMeasurementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatMeasurementsPageRoutingModule {}
