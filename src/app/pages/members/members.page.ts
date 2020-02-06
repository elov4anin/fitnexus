import {Component, OnInit} from '@angular/core';
import {ICommon} from "../../shared/interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;

@Component({
    selector: 'app-members',
    templateUrl: './members.page.html',
    styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
    pageTitle: string = 'Members';

    constructor() {
    }

    ngOnInit() {
    }
}
