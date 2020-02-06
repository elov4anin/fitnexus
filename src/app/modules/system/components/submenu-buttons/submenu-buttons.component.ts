import {Component, Input, OnInit} from '@angular/core';
import {ICommon} from "../../../../shared/interfaces/common.interfaces";
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
        if (redirectTo) {
            this._router.navigate(["/system", "news-feed", redirectTo]);
        }
        this._router.navigate(["/system", "news-feed"]);
        this.buttons.forEach(b => b.active = !b.active)
    }
}
