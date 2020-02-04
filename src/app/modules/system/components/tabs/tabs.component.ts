import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ICommon} from "../../../../shared/interfaces/common.interfaces";
import ITab = ICommon.ITab;

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

    tabs: ITab[] = [
        {
            order: 0,
            tabName: 'news-feed',
            icon: 'ios-list-box-gray.svg',
            redirectTo: ''
        },
        {
            order: 1,
            tabName: 'stats',
            icon: 'ios-stats.svg',
            redirectTo: 'login'
        },
        {
            order: 2,
            tabName: 'calendar',
            icon: 'ios-calendar.svg',
            redirectTo: ''
        },
        {
            order: 3,
            tabName: 'rating',
            icon: 'ios-trophy.svg',
            redirectTo: ''
        },
        {
            order: 4,
            tabName: 'food',
            icon: 'ios-restaurant.svg',
            redirectTo: ''
        }
    ];

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    tabChanged(tab) {
        this._router.navigate(['/system', tab]);
        console.log(tab)
    }
}
