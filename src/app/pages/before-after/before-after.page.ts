import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-before-after',
    templateUrl: './before-after.page.html',
    styleUrls: ['./before-after.page.scss'],
})
export class BeforeAfterPage extends PageBaseComponent  implements OnInit {
    pageTitle: string = 'TRACKING - BODY COMP';

    constructor() {
        super();
    }

    ngOnInit() {
    }

    addNewPicture() {

    }
}
