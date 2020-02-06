import {Component, Input, OnInit} from '@angular/core';
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;
import {Router} from "@angular/router";

@Component({
    selector: 'app-submenu-buttons',
    templateUrl: './submenu-buttons.component.html',
    styleUrls: ['./submenu-buttons.component.scss'],
})
export class SubmenuButtonsComponent implements OnInit {
    @Input() buttons: ITopButton[];

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    toggleButton(redirectTo: string) {
        const idx = this.buttons.findIndex(b => b.redirectTo === redirectTo);
        this.buttons.forEach(b => b.active = false);
        this.buttons[idx] = {
            ... this.buttons[idx],
            active: true
        };
        this._router.navigate(["/", redirectTo]);
    }
}
