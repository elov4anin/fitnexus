import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-new-measurements',
    templateUrl: './new-measurements.page.html',
    styleUrls: ['./new-measurements.page.scss'],
})
export class NewMeasurementsPage extends PageBaseComponent  implements OnInit {
    pageTitle: string = 'TRACKING - BODY COMP';

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    save(): void {
        this._router.navigate(["/stat-measurements"]);
    }
}
