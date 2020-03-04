import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-members-connect',
    templateUrl: './members-connect.page.html',
    styleUrls: ['./members-connect.page.scss'],
})
export class MembersConnectPage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'Members';

    constructor() {
        super();
    }

    ngOnInit() {
    }

    toggleFilter() {

    }

    refresh() {

    }
}
