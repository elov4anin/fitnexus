import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.page.html',
    styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'Feedback';
    rate: any;

    constructor() {
        super();
    }

    ngOnInit() {
    }

    onRateChange($event: number) {

    }
}
