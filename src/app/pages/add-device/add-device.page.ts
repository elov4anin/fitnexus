import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-stats',
    templateUrl: './add-device.page.html',
    styleUrls: ['./add-device.page.scss'],
})
export class AddDevicePage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'Tracking - Wearables & Apps';

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    addDevice(): void {
        this._router.navigate(['/stat-by-device']);
    }
}
