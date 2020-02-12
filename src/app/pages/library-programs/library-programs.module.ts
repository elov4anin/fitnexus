import {NgModule} from '@angular/core';

import {LibraryProgramsPageRoutingModule} from './library-programs-routing.module';

import {LibraryProgramsPage} from './library-programs.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        LibraryProgramsPageRoutingModule
    ],
    declarations: [LibraryProgramsPage]
})
export class LibraryProgramsPageModule {
}
