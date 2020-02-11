import {Component, OnInit} from '@angular/core';
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;
import {Router} from "@angular/router";

@Component({
    selector: 'app-tracking-layout',
    templateUrl: './tracking-layout.component.html',
    styleUrls: ['./tracking-layout.component.scss'],
})
export class TrackingLayoutComponent implements OnInit {
    buttons: ITopButton[] = [
        {
            text: 'trackers',
            icon: 'md-watch-blue.svg',
            redirectTo: 'trackers',
            active: true
        },
        {
            text: 'fitness',
            icon: 'ios-fitness.svg',
            redirectTo: 'fitness',
            active: false
        },
        {
            text: 'body-comp',
            icon: 'ios-man.svg',
            redirectTo: 'body-comp',
            active: false
        }


    ];

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    toggleButton(redirectTo: string) {
        const idx = this.buttons.findIndex(b => b.redirectTo === redirectTo);
        this.buttons.forEach(b => b.active = false);
        this.buttons[idx] = {
            ...this.buttons[idx],
            active: true
        };
        this._router.navigate(["/", redirectTo]);
    }
}
