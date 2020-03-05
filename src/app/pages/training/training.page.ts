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
    selectedExercises: any;
    selectedWeight: any;
    selectedReps: any;

    constructor(private _router: Router) {
        super();
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        const ionSelects = document.querySelectorAll('ion-select');
        ionSelects.forEach((ionSelect) => {
            const selectIconInner = ionSelect.shadowRoot.querySelector('.select-icon').querySelector('.select-icon-inner');
            if(selectIconInner){
                selectIconInner.setAttribute('style', 'display: none !important');
            }
        });
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
