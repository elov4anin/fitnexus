import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-my-programs',
    templateUrl: './my-programs.page.html',
    styleUrls: ['./my-programs.page.scss'],
})
export class MyProgramsPage implements OnInit {
    pageTitle: string = 'TRACKING - MY PROGRAMMES';

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    start():void {
        this._router.navigate(["/training"])
    }
}
