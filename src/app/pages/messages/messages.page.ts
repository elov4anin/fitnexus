import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-messages',
    templateUrl: './messages.page.html',
    styleUrls: ['./messages.page.scss'],
})
export class MessagesPage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'Messages';

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    openChat() {
        this._router.navigate(["/chat"])
    }
}
