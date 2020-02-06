import {Component, OnInit} from '@angular/core';
import {ICommon} from "../../../../shared/interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;

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

    constructor() {
    }

    ngOnInit() {
    }
}
