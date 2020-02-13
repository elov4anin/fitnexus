import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMeasurementsPage } from './new-measurements.page';

const routes: Routes = [
  {
    path: '',
    component: NewMeasurementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMeasurementsPageRoutingModule {}
