import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;
import {LayoutsEnum} from "../../enums/layouts.enum";

@Component({
    selector: 'app-button-layout',
    templateUrl: './button-layout.component.html',
    styleUrls: ['./button-layout.component.scss'],
})
export class ButtonLayoutComponent implements OnInit {

    @Input() listBtnForLayout: string;

    buttons: ITopButton[] = [];

    template: number = 1;

    constructor(private _router: Router) {
    }

    ngOnInit(): void {
        this.setButtons();
        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.setActiveButton(event.url.replace("/", ""));
            }
        })
    }


    toggleButton(redirectTo: string): void {
        if (this._router.url.includes(redirectTo)) {
            return
        }
        this.setActiveButton(redirectTo);
        this._router.navigate(["/", redirectTo]);
    }

    private setActiveButton(url: string): void {
        const idx = this.buttons.findIndex(b => b.redirectTo === url);
        this.buttons.forEach(b => b.active = false);
        this.buttons[idx] = {
            ...this.buttons[idx],
            active: true
        };
    }

    private setButtons() {
        switch (this.listBtnForLayout) {
            case LayoutsEnum.ACCOUNT: {
                this.buttons = [
                    {
                        text: 'trackers',
                        icon: 'ios-person-black.svg',
                        redirectTo: 'stat-by-device',
                        active: true
                    },
                    {
                        text: 'fitness',
                        icon: 'ios-fitness.svg',
                        redirectTo: 'welcome-programs',
                        active: false
                    },
                    {
                        text: 'body-comp',
                        icon: 'ios-photos-black.svg',
                        redirectTo: 'add-body-comp',
                        active: false
                    }
                ];
                this.template = 2;
                break;
            }
            case LayoutsEnum.NEWS: {
                this.buttons = [
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
                this.template = 1;
                break
            }
            case LayoutsEnum.TRACKING: {
                this.buttons = [
                    {
                        text: 'trackers',
                        icon: 'md-watch-blue.svg',
                        redirectTo: 'stat-by-device',
                        active: true
                    },
                    {
                        text: 'fitness',
                        icon: 'ios-fitness.svg',
                        redirectTo: 'welcome-programs',
                        active: false
                    },
                    {
                        text: 'body-comp',
                        icon: 'ios-man.svg',
                        redirectTo: 'add-body-comp',
                        active: false
                    }
                ];
                this.template = 2;
                break
            }
        }
    }
}