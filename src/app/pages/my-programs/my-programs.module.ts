import {NgModule} from '@angular/core';

import {MyProgramsPageRoutingModule} from './my-programs-routing.module';

import {MyProgramsPage} from './my-programs.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        MyProgramsPageRoutingModule
    ],
    declarations: [MyProgramsPage]
})
export class MyProgramsPageModule {
}
