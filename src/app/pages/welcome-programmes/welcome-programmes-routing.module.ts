import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeProgrammesPage } from './welcome-programmes.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeProgrammesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeProgrammesPageRoutingModule {}
