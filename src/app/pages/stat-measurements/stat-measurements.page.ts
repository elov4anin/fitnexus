import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-stat-measurements',
    templateUrl: './stat-measurements.page.html',
    styleUrls: ['./stat-measurements.page.scss'],
})
export class StatMeasurementsPage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'TRACKING - BODY COMP';

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    save() {

    }

    openMeasurement() {
      this._router.navigate(['/measurement-detail'])

    }
}
