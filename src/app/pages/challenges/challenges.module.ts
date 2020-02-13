import {NgModule} from '@angular/core';

import {ChallengesPage} from './challenges.page';
import {SharedModule} from "../../shared/shared.module";
import {ChallengesRoutingModule} from "./challenges-routing.module";

@NgModule({
    imports: [
        SharedModule,
        ChallengesRoutingModule,
    ],
    declarations: [
        ChallengesPage,
    ]
})
export class ChallengesModule {
}
