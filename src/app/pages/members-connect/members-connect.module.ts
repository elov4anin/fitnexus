import {NgModule} from '@angular/core';

import {MembersConnectPageRoutingModule} from './members-connect-routing.module';

import {MembersConnectPage} from './members-connect.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        MembersConnectPageRoutingModule
    ],
    declarations: [MembersConnectPage]
})
export class MembersConnectPageModule {
}
