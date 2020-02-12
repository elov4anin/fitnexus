import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
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
