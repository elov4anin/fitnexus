import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectTrackerPage } from './connect-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectTrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectTrackerPageRoutingModule {}
