import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-stats',
    templateUrl: './add-device.page.html',
    styleUrls: ['./add-device.page.scss'],
})
export class AddDevicePage implements OnInit {
    pageTitle: string = 'Tracking - Wearables & Apps';

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    addDevice(): void {
        this._router.navigate(['/stat-by-device']);
    }
}
