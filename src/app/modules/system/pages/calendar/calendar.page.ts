import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
    pageTitle: string = 'Classes - Upcoming';

    constructor() {
    }

    ngOnInit() {
    }

}
