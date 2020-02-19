import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.page.html',
    styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage extends PageBaseComponent implements OnInit {
    pageTitle: string = "Complete";

    constructor() {
        super();
    }

    ngOnInit() {
    }

    openFilter() {

    }
}
