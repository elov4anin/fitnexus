import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-my-programs',
    templateUrl: './my-programs.page.html',
    styleUrls: ['./my-programs.page.scss'],
})
export class MyProgramsPage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'TRACKING - MY PROGRAMMES';

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    start():void {
        this._router.navigate(["/training"])
    }
}
