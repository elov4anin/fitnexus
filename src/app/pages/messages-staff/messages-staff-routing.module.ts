import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesStaffPage } from './messages-staff.page';

const routes: Routes = [
  {
    path: '',
    component: MessagesStaffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesStaffPageRoutingModule {}
