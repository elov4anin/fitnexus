import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-training',
    templateUrl: './training.page.html',
    styleUrls: ['./training.page.scss'],
})
export class TrainingPage extends PageBaseComponent implements OnInit {
    pageTitle: string = ' ';

    constructor() {
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

    }

    saveExercise() {

    }
}
