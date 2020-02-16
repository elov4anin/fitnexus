import {NgModule} from '@angular/core';

import {ClassPageRoutingModule} from './class-routing.module';

import {ClassPage} from './class.page';
import {SharedModule} from "../../shared/shared.module";
import {IonicRatingModule} from "ionic4-rating/dist";

@NgModule({
    imports: [
        SharedModule,
        ClassPageRoutingModule,
        IonicRatingModule,
    ],
    declarations: [ClassPage]
})
export class ClassPageModule {
}
