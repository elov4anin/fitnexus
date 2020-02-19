import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage extends PageBaseComponent implements OnInit {
    pageTitle: string = '';

    constructor() {
        super();
    }

    ngOnInit() {
    }

    addComment() {

    }
}
