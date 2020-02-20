import {NgModule} from '@angular/core';

import {FeedbackPageRoutingModule} from './feedback-routing.module';

import {FeedbackPage} from './feedback.page';
import {IonicRatingModule} from "ionic4-rating/dist";
import {SharedModule} from "../../shared/shared.module";
import {LeaveFeedbackComponent} from "./leave-feedback/leave-feedback.component";

@NgModule({
    imports: [
        SharedModule,
        FeedbackPageRoutingModule,
        IonicRatingModule,
    ],
    declarations: [FeedbackPage, LeaveFeedbackComponent]
})
export class FeedbackPageModule {
}
