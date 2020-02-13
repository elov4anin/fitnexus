import {NgModule} from '@angular/core';

import {RatingPageRoutingModule} from './rating-routing.module';

import {RatingPage} from './rating.page';
import {SharedModule} from "../../shared/shared.module";
import {CardChallengeComponent} from "./card-challenge/card-challenge.component";

@NgModule({
    imports: [
        SharedModule,
        RatingPageRoutingModule,
    ],
    declarations: [
        RatingPage,
        CardChallengeComponent
    ]
})
export class RatingPageModule {
}
