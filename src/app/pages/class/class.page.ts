import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-class',
    templateUrl: './class.page.html',
    styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {
    pageTitle: string = ' ';
    rate: any;

    constructor() {
    }

    ngOnInit() {
    }

    bookNow() {

    }

    onRateChange($event: number) {

    }
}
