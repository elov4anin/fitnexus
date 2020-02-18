import {NgModule} from '@angular/core';

import {MessagesPageRoutingModule} from './messages-routing.module';

import {MessagesPage} from './messages.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        MessagesPageRoutingModule
    ],
    declarations: [MessagesPage]
})
export class MessagesPageModule {
}
