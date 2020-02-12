import {Component, OnInit} from '@angular/core';
import {ICommon} from "../../shared/interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;
import {Router} from "@angular/router";

@Component({
    selector: 'app-news-feed',
    templateUrl: './news-feed.page.html',
    styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage implements OnInit {
    pageTitle: string = 'News feed';

    repeat: number[] = [1,2,3,4,5,6,7,8];

    constructor(private _router: Router ) {
    }

    ngOnInit() {
    }

    openNewsPage() {
        this._router.navigate(['/', 'news-feed', 1])
    }
}