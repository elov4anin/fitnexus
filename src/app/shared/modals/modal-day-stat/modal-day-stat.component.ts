import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {IDay} from '../../components/weekly-stat/weekly-stat.component';

@Component({
    selector: 'app-modal-day-stat',
    templateUrl: './modal-day-stat.component.html',
    styleUrls: ['./modal-day-stat.component.scss'],
})
export class ModalDayStatComponent implements OnInit {
    @Input() day: IDay;

    constructor(private _modalController: ModalController) {
    }

    ngOnInit() {
    }

    dismissModal() {
        this._modalController.dismiss()

    }
}
