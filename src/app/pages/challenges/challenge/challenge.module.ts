import {NgModule} from '@angular/core';


import {ChallengePageRoutingModule} from './challenge-routing.module';

import {ChallengePage} from './challenge.page';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        ChallengePageRoutingModule,
    ],
    declarations: [ChallengePage]
})
export class ChallengePageModule {
}
