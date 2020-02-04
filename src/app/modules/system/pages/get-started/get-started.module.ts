import {NgModule} from '@angular/core';
import {GetStartedPageRoutingModule} from './get-started-routing.module';

import {GetStartedPage} from './get-started.page';
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        GetStartedPageRoutingModule,
    ],
    declarations: [GetStartedPage]
})
export class GetStartedPageModule {
}
