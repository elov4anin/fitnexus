import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
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
