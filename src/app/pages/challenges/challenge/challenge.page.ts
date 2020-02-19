import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-challenge',
    templateUrl: './challenge.page.html',
    styleUrls: ['./challenge.page.scss'],
})
export class ChallengePage extends PageBaseComponent implements OnInit {
    pageTitle: string = " ";

    constructor() {
        super();
    }

    ngOnInit() {
    }

    connectDevice() {

    }

    joinChallenge() {

    }
}
