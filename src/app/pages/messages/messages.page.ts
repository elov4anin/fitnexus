import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-messages',
    templateUrl: './messages.page.html',
    styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
    pageTitle: string = 'Messages';

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    openChat() {
        this._router.navigate(["/chat"])
    }
}
