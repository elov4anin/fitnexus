import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;

@Component({
    selector: 'app-account-layout',
    templateUrl: './account-layout.component.html',
    styleUrls: ['./account-layout.component.scss'],
})
export class AccountLayoutComponent implements OnInit {
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

    ngOnInit(): void {
        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.setActiveButton(event.url.replace("/", ""));
            }
        })
    }


    toggleButton(redirectTo: string): void {
        if (this._router.url.includes(redirectTo)) {
            return
        }
        this.setActiveButton(redirectTo);
        this._router.navigate(["/", redirectTo]);
    }

    private setActiveButton(url: string): void {
        const idx = this.buttons.findIndex(b => b.redirectTo === url);
        this.buttons.forEach(b => b.active = false);
        this.buttons[idx] = {
            ...this.buttons[idx],
            active: true
        };
    }
}
