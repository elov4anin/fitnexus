import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;

@Component({
  selector: 'app-body-comp-layout',
  templateUrl: './body-comp-layout.component.html',
  styleUrls: ['./body-comp-layout.component.scss'],
})
export class BodyCompLayoutComponent implements OnInit {
  buttons: ITopButton[] = [
    {
      text: 'Before & after',
      icon: 'ios-photos.svg',
      redirectTo: 'before-after',
      active: true
    },
    {
      text: 'New measurements',
      icon: 'ios-body.svg',
      redirectTo: 'new-measurements',
      active: false
    },
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
