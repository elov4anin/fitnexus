import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.page.html',
    styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage extends PageBaseComponent implements OnInit {
    pageTitle: string = "COMPETE";
    selectedStep: any;
    selectedYear: any;

    constructor() {
        super();
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        const ionSelects = document.querySelectorAll('ion-select');
        ionSelects.forEach((ionSelect) => {
            const selectIconInner = ionSelect.shadowRoot.querySelector('.select-icon').querySelector('.select-icon-inner');
            if(selectIconInner){
                selectIconInner.setAttribute('style', 'display: none !important');
            }
        });
    }

    openFilter() {

    }
}
