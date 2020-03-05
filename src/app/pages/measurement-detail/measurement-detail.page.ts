import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-measurement-detail',
    templateUrl: './measurement-detail.page.html',
    styleUrls: ['./measurement-detail.page.scss'],
})
export class MeasurementDetailPage extends PageBaseComponent implements OnInit {
    pageTitle: string = ' ';
    selectedMeasurement: any;

    constructor() {
        super();
    }

    ngOnInit() {
    }

    addMeasurement() {

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
}
