import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.page.html',
    styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
    pageTitle: string = 'Feedback';
    rate: any;

    constructor() {
    }

    ngOnInit() {
    }

    onRateChange($event: number) {

    }
}
