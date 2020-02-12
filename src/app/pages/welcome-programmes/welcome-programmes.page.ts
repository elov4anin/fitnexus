import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-welcome-programmes',
    templateUrl: './welcome-programmes.page.html',
    styleUrls: ['./welcome-programmes.page.scss'],
})
export class WelcomeProgrammesPage implements OnInit {
  pageTitle: string = 'TRACKING - PROGRAMMES';

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    addNewProgram() {

    }

    openProgramLibrary() {
        this._router.navigate(["/library-programs"])

    }
}
