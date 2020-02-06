import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
    selector: 'app-welcome-premium',
    templateUrl: './welcome-premium.page.html',
    styleUrls: ['../get-started/slide.scss','./welcome-premium.page.scss'],
})
export class WelcomePremiumPage implements OnInit {
    pageTitle: string = 'Welcome to fitnexus';

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    start() {
        this._router.navigate(['/', 'news-feed'])
    }
}
