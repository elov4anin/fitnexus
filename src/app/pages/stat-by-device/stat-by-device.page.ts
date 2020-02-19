import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-stat-by-device',
    templateUrl: './stat-by-device.page.html',
    styleUrls: ['./stat-by-device.page.scss'],
})
export class StatByDevicePage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'Tracking - Wearables & Apps';

    constructor() {
        super();
    }

    ngOnInit() {
    }

    addDevice() {

    }
}
