import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from '../../shared/components/page-base/page-base.component';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.page.html',
    styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'Notifications';

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
