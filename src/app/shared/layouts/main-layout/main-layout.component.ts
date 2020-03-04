import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Location } from "@angular/common";

import {
    TabsEnum,
    TabsEnum2IconActiveMapping,
    TabsEnum2IconMapping,
    TabsEnum2RoutingMapping
} from "../../enums/tabs.enum";


@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
    @Input() titlePage: string;
    @Input() isAccount: boolean = false;
    @Input() isNeedBack: boolean = false;
    @Input() isNeedLogo: boolean = false;

    public readonly tabs = Object.keys(TabsEnum).map(
        (key) => TabsEnum[key]
    );

    public readonly TabsEnum2IconMapping = TabsEnum2IconMapping;
    public readonly TabsEnum2RoutingMapping = TabsEnum2RoutingMapping;

    constructor(private _router: Router, private _location: Location) {
    }

    ngOnInit(): void {
    }

    tabClicked(tab): void {
        this._router.navigate(['/', tab]);
    }

    getActiveTabIcon(currentRoute: string): string {
        switch (currentRoute) {
            case TabsEnum.NEWS:
                if (this._router.url.includes(TabsEnum2RoutingMapping[currentRoute])) {
                    return TabsEnum2IconActiveMapping[currentRoute]
                } else {
                    return TabsEnum2IconMapping[currentRoute]
                }
            case TabsEnum.STATS:
                if (this._router.url.includes(TabsEnum2RoutingMapping[currentRoute])) {
                    return TabsEnum2IconActiveMapping[currentRoute]
                } else {
                    return TabsEnum2IconMapping[currentRoute]
                }
            case TabsEnum.CALENDAR:
                if (this._router.url.includes(TabsEnum2RoutingMapping[currentRoute])) {
                    return TabsEnum2IconActiveMapping[currentRoute]
                } else {
                    return TabsEnum2IconMapping[currentRoute]
                }
            case TabsEnum.RATING:
                if (this._router.url.includes(TabsEnum2RoutingMapping[currentRoute])) {
                    return TabsEnum2IconActiveMapping[currentRoute]
                } else {
                    return TabsEnum2IconMapping[currentRoute]
                }
            case TabsEnum.FOOD:
                if (this._router.url.includes(TabsEnum2RoutingMapping[currentRoute])) {
                    return TabsEnum2IconActiveMapping[currentRoute]
                } else {
                    return TabsEnum2IconMapping[currentRoute]
                }

        }
    }

    back() {
        this._location.back()
    }
}
