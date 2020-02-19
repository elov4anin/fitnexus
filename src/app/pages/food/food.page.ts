import {Component, OnInit} from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-food',
    templateUrl: './food.page.html',
    styleUrls: ['./food.page.scss'],
})
export class FoodPage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'Meals';

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
