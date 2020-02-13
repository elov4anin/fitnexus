import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-rating',
    templateUrl: './rating.page.html',
    styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
    pageTitle: string = 'Rankings - Challenges';

    repeat: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    openNewsPage() {
        this._router.navigate(['/', 'news-feed', 1])
    }


}
