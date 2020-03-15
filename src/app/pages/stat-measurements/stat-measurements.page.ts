import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {CalendarComponentOptions, CalendarModal, CalendarModalOptions} from "ion2-calendar";
import * as moment from "moment";
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'app-stat-measurements',
    templateUrl: './stat-measurements.page.html',
    styleUrls: ['./stat-measurements.page.scss'],
})
export class StatMeasurementsPage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'TRACKING - BODY COMP';
    selectedDate: any;
    type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
    optionsRange: CalendarComponentOptions = {
        pickMode: 'range'
    };
    dateLabel: string = 'Select date';

    constructor(private _router: Router, public modalCtrl: ModalController) {
        super();
    }

    ngOnInit() {
    }

    save() {

    }

    openMeasurement() {
      this._router.navigate(['/measurement-detail']);
    }

    async openCalendar() {
        const options: CalendarModalOptions = {
            title: 'Select date',
            color: 'secondary',
            from: new Date(2020, 0, 1)
        };

        const myCalendar = await this.modalCtrl.create({
            component: CalendarModal,
            componentProps: { options }
        });

        myCalendar.present();

        const event: any = await myCalendar.onDidDismiss();
        const date = event.data;
        this.selectedDate = date;
        this.dateLabel =  moment([date.years, date.months, date.date]).format('DD/MM/YYYY');
        console.log(date);
    }
}
