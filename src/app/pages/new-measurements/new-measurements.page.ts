import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-new-measurements',
    templateUrl: './new-measurements.page.html',
    styleUrls: ['./new-measurements.page.scss'],
})
export class NewMeasurementsPage implements OnInit {
    pageTitle: string = 'TRACKING - BODY COMP';

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    save(): void {
        this._router.navigate(["/stat-measurements"]);
    }
}
