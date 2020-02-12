import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryProgramsPage } from './library-programs.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryProgramsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryProgramsPageRoutingModule {}
