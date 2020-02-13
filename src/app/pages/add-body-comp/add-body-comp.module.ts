import {NgModule} from '@angular/core';

import {AddBodyCompPageRoutingModule} from './add-body-comp-routing.module';

import {AddBodyCompPage} from './add-body-comp.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        AddBodyCompPageRoutingModule
    ],
    declarations: [AddBodyCompPage]
})
export class AddBodyCompPageModule {
}
