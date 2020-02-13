import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengesPage } from './challenges.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengesPage
  },
  {
    path: ':id',
    loadChildren: () => import('./challenge/challenge.module').then( m => m.ChallengePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengesRoutingModule {}
