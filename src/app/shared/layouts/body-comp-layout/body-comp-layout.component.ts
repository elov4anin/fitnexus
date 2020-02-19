import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, RouteConfigLoadEnd, Router} from "@angular/router";
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;

@Component({
    selector: 'app-body-comp-layout',
    templateUrl: './body-comp-layout.component.html',
    styleUrls: ['./body-comp-layout.component.scss'],
})
export class BodyCompLayoutComponent implements OnInit {
    buttons: ITopButton[] = [
        {
            text: 'Before & after',
            icon: 'ios-photos.svg',
            redirectTo: 'before-after',
            active: false
        },
        {
            text: 'New measurements',
            icon: 'ios-body.svg',
            redirectTo: 'new-measurements',
            active: false
        },
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
