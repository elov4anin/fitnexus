import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {IonSelect, ModalController} from "@ionic/angular";
import {CalendarComponentOptions, CalendarModal, CalendarModalOptions, CalendarResult} from "ion2-calendar";
import * as moment from "moment";

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

    dateRange: { from: string; to: string; };
    type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
    optionsRange: CalendarComponentOptions = {
        pickMode: 'range'
    };
    dateRangeLabel: string = 'Select date range';


    constructor(public modalCtrl: ModalController) {
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

    async openCalendar() {
        const options: CalendarModalOptions = {
            pickMode: 'range',
            title: 'RANGE'
        };

        const myCalendar = await this.modalCtrl.create({
            component: CalendarModal,
            componentProps: { options }
        });

        myCalendar.present();

        const event: any = await myCalendar.onDidDismiss();
        const date = event.data;
        const from = moment([date.from.years, date.from.months, date.from.date]).format('DD MMM YYYY');
        const to = moment([date.to.years, date.to.months, date.to.date]).format('DD MMM YYYY');
        this.dateRange = date;
        if (!!from && !!to) {
            this.dateRangeLabel = `${from} - ${to}`;
        }

        console.log(date, from, to);
    }
}
