import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;

@Component({
    selector: 'app-library-layout',
    templateUrl: './library-layout.component.html',
    styleUrls: ['./library-layout.component.scss'],
})
export class LibraryLayoutComponent implements OnInit {
    buttons: ITopButton[] = [
        {
            text: 'Library',
            icon: 'ios-journal.svg',
            redirectTo: 'library-programs',
            active: true
        },
        {
            text: 'My programmes',
            icon: 'ios-person-nav.svg',
            redirectTo: 'my-programs',
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
