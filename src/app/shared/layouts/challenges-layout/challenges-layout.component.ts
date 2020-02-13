import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;

@Component({
  selector: 'app-challenges-layout',
  templateUrl: './challenges-layout.component.html',
  styleUrls: ['./challenges-layout.component.scss'],
})
export class ChallengesLayoutComponent implements OnInit {
  buttons: ITopButton[] = [
    {
      text: 'Challenges',
      icon: 'ios-flag.svg',
      redirectTo: 'rating',
      active: true
    },
    {
      text: 'Leaderboard',
      icon: 'ios-list.svg',
      redirectTo: 'leaderboard',
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
