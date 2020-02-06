import {NgModule} from '@angular/core';

import {MembersPageRoutingModule} from './members-routing.module';

import {MembersPage} from './members.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        MembersPageRoutingModule
    ],
    declarations: [MembersPage]
})
export class MembersPageModule {
}
