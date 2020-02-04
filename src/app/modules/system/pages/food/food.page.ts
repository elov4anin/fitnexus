import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-food',
    templateUrl: './food.page.html',
    styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
    pageTitle: string = 'Meals';

    constructor() {
    }

    ngOnInit() {
    }

}
