import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
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
      redirectTo: 'challenges',
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
