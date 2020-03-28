import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageBaseComponent} from '../../shared/components/page-base/page-base.component';

@Component({
    selector: 'app-messages-staff',
    templateUrl: './messages-staff.page.html',
    styleUrls: ['./messages-staff.page.scss'],
})
export class MessagesStaffPage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'Stфff';

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    openChat() {
        this._router.navigate(["/chat"])
    }

}
