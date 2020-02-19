import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
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

    ngOnInit(): void {
        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.setActiveButton(event.url.replace("/", ""));
            }
        })
    }


    toggleButton(redirectTo: string): void {
        if (this._router.url.includes(redirectTo)) {
            return
        }
        this.setActiveButton(redirectTo);
        this._router.navigate(["/", redirectTo]);
    }

    private setActiveButton(url: string): void {
        const idx = this.buttons.findIndex(b => b.redirectTo === url);
        this.buttons.forEach(b => b.active = false);
        this.buttons[idx] = {
            ...this.buttons[idx],
            active: true
        };
    }

}
