import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;

@Component({
    selector: 'app-messages-layout',
    templateUrl: './messages-layout.component.html',
    styleUrls: ['./messages-layout.component.scss'],
})
export class MessagesLayoutComponent implements OnInit {
    buttons: ITopButton[] = [
        {
            text: 'trackers',
            icon: 'ios-person-black.svg',
            redirectTo: 'stat-by-device',
            active: true
        },
        {
            text: 'fitness',
            icon: 'ios-fitness.svg',
            redirectTo: 'welcome-programs',
            active: false
        },
        {
            text: 'body-comp',
            icon: 'ios-photos-black.svg',
            redirectTo: 'add-body-comp',
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
