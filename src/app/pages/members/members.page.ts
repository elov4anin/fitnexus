import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-members',
    templateUrl: './members.page.html',
    styleUrls: ['./members.page.scss'],
})
export class MembersPage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'Members';

    constructor() {
        super();
    }

    ngOnInit() {
    }

    apply() {

    }
}
