import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBodyCompPage } from './add-body-comp.page';

const routes: Routes = [
  {
    path: '',
    component: AddBodyCompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBodyCompPageRoutingModule {}
