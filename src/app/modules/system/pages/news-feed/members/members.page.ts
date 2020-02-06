import {Component, OnInit} from '@angular/core';
import {ICommon} from "../../../../../shared/interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;

@Component({
    selector: 'app-members',
    templateUrl: './members.page.html',
    styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
    pageTitle: string = 'Members';
    topButtons: ITopButton[] = [
        {
            text: 'Feed',
            icon: 'ios-list-box-white.svg',
            active: false
        },
        {
            text: 'Members',
            icon: 'ios-person-white.svg',
            redirectTo: 'members',
            active: true
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
