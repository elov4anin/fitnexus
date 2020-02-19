import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-class',
    templateUrl: './class.page.html',
    styleUrls: ['./class.page.scss'],
})
export class ClassPage extends PageBaseComponent implements OnInit {
    pageTitle: string = ' ';
    rate: any;

    constructor() {
        super();
    }

    ngOnInit() {
    }

    bookNow() {

    }

    onRateChange($event: number) {

    }
}
