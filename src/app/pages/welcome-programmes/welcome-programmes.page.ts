import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-welcome-programmes',
    templateUrl: './welcome-programmes.page.html',
    styleUrls: ['./welcome-programmes.page.scss'],
})
export class WelcomeProgrammesPage extends PageBaseComponent implements OnInit {
  pageTitle: string = 'TRACKING - PROGRAMMES';

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    addNewProgram() {
        this._router.navigate(["/training"])
    }

    openProgramLibrary() {
        this._router.navigate(["/library-programs"])

    }
}
