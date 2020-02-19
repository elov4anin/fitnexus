import {Component, OnInit} from '@angular/core';
import {LayoutsEnum} from "../../shared/enums/layouts.enum";

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
    pageTitle: string = '';

    readonly listBtnForLayout = LayoutsEnum;

    constructor() {
    }

    ngOnInit() {
    }

    saveProfile() {

    }
}
