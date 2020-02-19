import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-measurement-detail',
    templateUrl: './measurement-detail.page.html',
    styleUrls: ['./measurement-detail.page.scss'],
})
export class MeasurementDetailPage extends PageBaseComponent implements OnInit {
    pageTitle: string = ' ';

    constructor() {
        super();
    }

    ngOnInit() {
    }

    addMeasurement() {

    }
}
