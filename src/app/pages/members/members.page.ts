import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {Router} from "@angular/router";

@Component({
    selector: 'app-members',
    templateUrl: './members.page.html',
    styleUrls: ['./members.page.scss'],
})
export class MembersPage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'Members';

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    apply() {
        this._router.navigate(["/members-connect"])

    }
}
