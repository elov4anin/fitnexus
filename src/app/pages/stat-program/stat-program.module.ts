import {NgModule} from '@angular/core';
import {StatProgramPage} from "./stat-program.page";
import {StatProgramPageRoutingModule} from "./stat-program-routing.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    imports: [
        SharedModule,
        StatProgramPageRoutingModule
    ],
    declarations: [StatProgramPage]
})
export class StatProgramPageModule {
}
