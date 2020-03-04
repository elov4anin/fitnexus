import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {Router} from "@angular/router";

@Component({
    selector: 'app-training',
    templateUrl: './training.page.html',
    styleUrls: ['./training.page.scss'],
})
export class TrainingPage extends PageBaseComponent implements OnInit {
    pageTitle: string = ' ';

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    addExercise() {

    }

    addImage() {

    }

    deleteExercise() {

    }

    saveProgram() {
        this._router.navigate(['/stat-program'])

    }

    saveExercise() {

    }
}
