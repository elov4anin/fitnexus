import {Component, OnInit} from '@angular/core';
import {ICommon} from "../../../../shared/interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;
import {Router} from "@angular/router";

@Component({
    selector: 'app-news-feed',
    templateUrl: './news-feed.page.html',
    styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage implements OnInit {
    pageTitle: string = 'News feed';
    topButtons: ITopButton[] = [
        {
            text: 'Feed',
            icon: 'ios-list-box-white.svg',
            active: true
        },
        {
            text: 'Members',
            icon: 'ios-person-white.svg',
            redirectTo: 'members',
            active: false
        }
    ];
    repeat: number[] = [1,2,3,4,5,6,7,8];

    constructor(private _router: Router ) {
    }

    ngOnInit() {
    }

    openNewsPage() {
        this._router.navigate(['/system', 'news-feed', 'news', 1])
    }
}
