import {NgModule} from '@angular/core';

import {BeforeAfterPageRoutingModule} from './before-after-routing.module';

import {BeforeAfterPage} from './before-after.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        BeforeAfterPageRoutingModule
    ],
    declarations: [BeforeAfterPage]
})
export class BeforeAfterPageModule {
}
