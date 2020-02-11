import {NgModule} from '@angular/core';

import {WelcomeProgrammesPageRoutingModule} from './welcome-programmes-routing.module';

import {WelcomeProgrammesPage} from './welcome-programmes.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        WelcomeProgrammesPageRoutingModule
    ],
    declarations: [WelcomeProgrammesPage]
})
export class WelcomeProgrammesPageModule {
}
