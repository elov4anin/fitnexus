import {Component, OnInit} from '@angular/core';
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;
import {Router} from "@angular/router";

@Component({
    selector: 'app-news-feed-layout',
    templateUrl: './news-feed-layout.component.html',
    styleUrls: ['./news-feed-layout.component.scss'],
})
export class NewsFeedLayoutComponent implements OnInit {
    buttons: ITopButton[] = [
        {
            text: 'Feed',
            icon: 'ios-list-box-white.svg',
            redirectTo: 'news-feed',
            active: true
        },
        {
            text: 'Members',
            icon: 'ios-person-white.svg',
            redirectTo: 'members',
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
