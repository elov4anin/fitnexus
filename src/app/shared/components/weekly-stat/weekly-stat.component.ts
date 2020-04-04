import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalDayStatComponent} from '../../modals/modal-day-stat/modal-day-stat.component';

export interface IDay {
    id: number;
    day: string;
    isSelect: boolean;
    height: number;
    isCurrent: boolean;
}

@Component({
    selector: 'app-weekly-stat',
    templateUrl: './weekly-stat.component.html',
    styleUrls: ['./weekly-stat.component.scss'],
})
export class WeeklyStatComponent implements OnInit {

    days: IDay[] = [
        {
            id: 1,
            day: 'S',
            isSelect: false,
            height: 83,
            isCurrent: false,
        },
        {
            id: 2,
            day: 'M',
            isSelect: false,
            height: 99,
            isCurrent: false,
        },
        {
            id: 3,
            day: 'T',
            isSelect: false,
            height: 47,
            isCurrent: false,
        },
        {
            id: 4,
            day: 'W',
            isSelect: false,
            height: 113,
            isCurrent: false,
        },
        {
            id: 5,
            day: 'T',
            isSelect: false,
            height: 79,
            isCurrent: false,
        },
        {
            id: 6,
            day: 'F',
            isSelect: false,
            height: 95,
            isCurrent: false,
        },
        {
            id: 7,
            day: 'S',
            isSelect: false,
            height: 158,
            isCurrent: true,
        },
    ];

    constructor(private _modalController: ModalController) {
    }

    ngOnInit() {
    }

    async selectDay(d) {
        this.days.forEach((d) => {
            d.isSelect = false;
        });

        let selected = this.days.find((day) => day.id === d.id);
        selected.isSelect = true;

        const modal = await this._modalController.create({
            component: ModalDayStatComponent,
            componentProps: {
                day: d
            },
        });
        return await modal.present();
    }

}
