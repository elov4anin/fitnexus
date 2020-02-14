import {NgModule} from '@angular/core';

import {LeaderboardPageRoutingModule} from './leaderboard-routing.module';

import {LeaderboardPage} from './leaderboard.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        LeaderboardPageRoutingModule
    ],
    declarations: [LeaderboardPage]
})
export class LeaderboardPageModule {
}
