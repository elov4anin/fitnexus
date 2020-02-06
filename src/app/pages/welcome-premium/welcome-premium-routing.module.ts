import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePremiumPage } from './welcome-premium.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomePremiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePremiumPageRoutingModule {}
