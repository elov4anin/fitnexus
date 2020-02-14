import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;

@Component({
    selector: 'app-meals-layout',
    templateUrl: './meals-layout.component.html',
    styleUrls: ['./meals-layout.component.scss'],
})
export class MealsLayoutComponent implements OnInit {
    buttons: ITopButton[] = [
        {
            text: 'Meals',
            icon: 'ios-restaurant-white.svg',
            redirectTo: 'food',
            active: true
        },
        {
            text: 'Meal Planner',
            icon: 'ios-checkbox.svg',
            redirectTo: 'meal-planner',
            active: false
        }
    ];

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

    toggleButton(redirectTo: string) {
        const idx = this.buttons.findIndex(b => b.redirectTo === redirectTo);
        this.buttons.forEach(b => b.active = false);
        this.buttons[idx] = {
            ...this.buttons[idx],
            active: true
        };
        this._router.navigate(["/", redirectTo]);
    }

}
