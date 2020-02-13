import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-add-body-comp',
    templateUrl: './add-body-comp.page.html',
    styleUrls: ['./add-body-comp.page.scss'],
})
export class AddBodyCompPage implements OnInit {
    pageTitle: string = 'TRACKING - BODY COMP';

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    addBodyComp(): void {
        this._router.navigate(["/new-measurements"])

    }
}
