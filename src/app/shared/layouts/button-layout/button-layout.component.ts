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
        if (url.includes('/')) {
            url = url.split('/')[0];
        }
        const idx = this.buttons.findIndex(b => b.activePages.includes(url));
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
                        text: 'account',
                        icon: 'ios-person-black.svg',
                        activeIcon: 'ios-person-blue.svg',
                        redirectTo: 'account',
                        active: true,
                        activePages: ['account'],
                    },
                    {
                        text: 'fitness',
                        icon: 'ios-fitness.svg',
                        activeIcon: 'ios-fitness-blue.svg',
                        redirectTo: 'welcome-programs',
                        active: false,
                        activePages: ['welcome-programs'],
                    },
                    {
                        text: 'albums',
                        icon: 'ios-photos-black.svg',
                        activeIcon: 'ios-photos-blue.svg',
                        redirectTo: 'albums',
                        active: false,
                        activePages: ['albums'],
                    }
                ];
                this.template = 2;
                break;
            }
            case LayoutsEnum.MESSAGES: {
                this.buttons = [
                    {
                        text: 'New message',
                        icon: 'ios-mail.svg',
                        activeIcon: 'ios-mail.svg',
                        redirectTo: 'messages',
                        active: true,
                        activePages: ['messages', 'chat', 'stuff'],
                    },
                ];
                this.template = 1;
                break;
            }
            case LayoutsEnum.NOTIFICATIONS: {
                this.buttons = [
                    {
                        text: 'Notifications',
                        icon: 'notifications-outline.svg',
                        activeIcon: 'notifications-outline.svg',
                        redirectTo: 'notifications',
                        active: true,
                        activePages: ['notifications'],
                    },
                ];
                this.template = 1;
                break;
            }

            case LayoutsEnum.ALBUMS: {
                this.buttons = [
                    {
                        text: 'Albums',
                        icon: 'ios-photos-white.svg',
                        activeIcon: 'ios-photos-white.svg',
                        redirectTo: 'albums',
                        active: true,
                        activePages: ['albums'],
                    },
                ];
                this.template = 1;
                break;
            }
            case LayoutsEnum.NEWS: {
                this.buttons = [
                    {
                        text: 'Feed',
                        icon: 'ios-list-box-white.svg',
                        redirectTo: 'news-feed',
                        active: true,
                        activePages: ['news-feed'],
                    },
                    {
                        text: 'Members',
                        icon: 'ios-person-white.svg',
                        redirectTo: 'members',
                        active: false,
                        activePages: ['members', 'members-connect'],
                    }
                ];
                this.template = 1;
                break
            }
            case LayoutsEnum.TRACKING: {
                this.buttons = [
                    {
                        text: 'trackers',
                        icon: 'md-watch-black.svg',
                        activeIcon: 'md-watch-blue.svg',
                        redirectTo: 'stat-by-device',
                        active: true,
                        activePages: ['stat-by-device', 'add-device'],
                    },
                    {
                        text: 'fitness',
                        icon: 'ios-fitness.svg',
                        activeIcon: 'ios-fitness-blue.svg',
                        redirectTo: 'welcome-programs',
                        active: false,
                        activePages: ['welcome-programs', 'training', 'stat-program'],
                    },
                    {
                        text: 'body-comp',
                        icon: 'ios-man.svg',
                        activeIcon: 'ios-man-blue.svg',
                        redirectTo: 'add-body-comp',
                        active: false,
                        activePages: ['add-body-comp', 'before-after', 'new-measurements', 'stat-measurements', 'measurement-detail'],
                    }
                ];
                this.template = 2;
                break
            }
            case LayoutsEnum.CALENDAR: {
                this.buttons =  [
                    {
                        text: 'Upcoming',
                        icon: 'ios-clock.svg',
                        redirectTo: 'calendar',
                        active: true,
                        activePages: ['calendar'],
                    },
                    {
                        text: 'My bookings',
                        icon: 'ios-journal.svg',
                        redirectTo: 'my-bookings',
                        active: false,
                        activePages: ['my-bookings'],
                    },
                ];
                this.template = 1;
                break
            }
            case LayoutsEnum.CHALLENGES: {
                this.buttons =  [
                    {
                        text: 'Challenges',
                        icon: 'ios-flag.svg',
                        redirectTo: 'challenges',
                        active: true,
                        activePages: ['challenges'],
                    },
                    {
                        text: 'Leaderboard',
                        icon: 'ios-list.svg',
                        redirectTo: 'leaderboard',
                        active: false,
                        activePages: ['leaderboard'],
                    }
                ];
                this.template = 1;
                break
            }
            case LayoutsEnum.MEALS: {
                this.buttons =  [
                    {
                        text: 'Meals',
                        icon: 'ios-restaurant-white.svg',
                        redirectTo: 'food',
                        active: true,
                        activePages: ['food'],
                    },
                    {
                        text: 'Meal Planner',
                        icon: 'ios-checkbox.svg',
                        redirectTo: 'meal-planner',
                        active: false,
                        activePages: ['meal-planner'],
                    }
                ];
                this.template = 1;
                break
            }
            case LayoutsEnum.LIBRARY: {
                this.buttons =  [
                    {
                        text: 'Library',
                        icon: 'ios-journal.svg',
                        redirectTo: 'library-programs',
                        active: true,
                        activePages: ['library-programs'],
                    },
                    {
                        text: 'My programmes',
                        icon: 'ios-person-white.svg',
                        redirectTo: 'my-programs',
                        active: false,
                        activePages: ['my-programs'],
                    },

                ];
                this.template = 1;
                break
            }
            case LayoutsEnum.CLASSES: {
                this.buttons =  [
                    {
                        text: 'Class',
                        icon: 'ios-person-white.svg',
                        redirectTo: 'class',
                        active: true,
                        activePages: ['class'],
                    },
                    {
                        text: 'Feedback',
                        icon: 'ios-journal.svg',
                        redirectTo: 'feedback',
                        active: false,
                        activePages: ['feedback'],
                    },
                ];
                this.template = 1;
                break
            }
        }
    }
}
