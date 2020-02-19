import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;

@Component({
    selector: 'app-messages-into-layout',
    templateUrl: './messages-into-layout.component.html',
    styleUrls: ['./messages-into-layout.component.scss'],
})
export class MessagesIntoLayoutComponent implements OnInit {
    buttons: ITopButton[] = [
        {
            text: 'Members',
            icon: '',
            redirectTo: 'members',
            active: true
        },
        {
            text: 'Staff',
            icon: '',
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
