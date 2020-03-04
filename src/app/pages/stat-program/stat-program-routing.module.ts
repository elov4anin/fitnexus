import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatProgramPage} from "./stat-program.page";


const routes: Routes = [
  {
    path: '',
    component: StatProgramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatProgramPageRoutingModule {}
