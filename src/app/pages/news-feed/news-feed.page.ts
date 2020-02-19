import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-news-feed',
    templateUrl: './news-feed.page.html',
    styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'News feed';

    repeat: number[] = [1,2,3,4,5,6,7,8];

    constructor(private _router: Router ) {
        super()
    }

    ngOnInit() {
    }

    openNewsPage() {
        this._router.navigate(['/', 'news-feed', 1])
    }
}
