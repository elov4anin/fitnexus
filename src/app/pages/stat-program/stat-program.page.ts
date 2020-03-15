import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {Router} from "@angular/router";
import {CalendarComponentOptions, CalendarModal, CalendarModalOptions} from "ion2-calendar";
import {ModalController} from "@ionic/angular";
import * as moment from "moment";

@Component({
    selector: 'app-stat-program',
    templateUrl: './stat-program.page.html',
    styleUrls: ['./stat-program.page.scss'],
})
export class StatProgramPage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'TRACKING - PROGRAMMES';
    selectedProgram: any;
    selectedSquats: any;

    dateRange: { from: string; to: string; };
    type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
    optionsRange: CalendarComponentOptions = {
        pickMode: 'range'
    };
    dateRangeLabel: string = 'Select date range';

    constructor(private _router: Router, public modalCtrl: ModalController) {
        super();
    }

    ngOnInit(): void {
    }

    openPrograms(): void {
        this._router.navigate(['/library-programs'])
    }

    addProgram(): void {
        this._router.navigate(['/training'])
    }

    ionViewDidEnter() {
        const ionSelects = document.querySelectorAll('ion-select');
        ionSelects.forEach((ionSelect) => {
            const selectIconInner = ionSelect.shadowRoot.querySelector('.select-icon').querySelector('.select-icon-inner');
            if (selectIconInner) {
                selectIconInner.setAttribute('style', 'display: none !important');
            }
        });
    }

    async openCalendar() {
        const options: CalendarModalOptions = {
            pickMode: 'range',
            title: 'RANGE',
            color: 'secondary',
            from: new Date(2020, 0, 1)
        };

        const myCalendar = await this.modalCtrl.create({
            component: CalendarModal,
            componentProps: {options}
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
