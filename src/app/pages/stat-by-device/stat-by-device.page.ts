import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {IonSelect} from "@ionic/angular";

@Component({
    selector: 'app-stat-by-device',
    templateUrl: './stat-by-device.page.html',
    styleUrls: ['./stat-by-device.page.scss'],
})
export class StatByDevicePage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'Tracking - Wearables & Apps';
    selectedDevice: any;
    @ViewChildren('ion-select') selectsRef: QueryList<IonSelect>;
    selectedStep: any;
    selectedDateRange: any;


    constructor() {
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

    addDevice() {

    }
}
