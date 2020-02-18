import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-stat-measurements',
    templateUrl: './stat-measurements.page.html',
    styleUrls: ['./stat-measurements.page.scss'],
})
export class StatMeasurementsPage implements OnInit {
    pageTitle: string = 'TRACKING - BODY COMP';

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    save() {

    }

    openMeasurement() {
      this._router.navigate(['/measurement-detail'])

    }
}
