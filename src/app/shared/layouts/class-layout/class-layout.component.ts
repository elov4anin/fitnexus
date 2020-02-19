import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;

@Component({
  selector: 'app-class-layout',
  templateUrl: './class-layout.component.html',
  styleUrls: ['./class-layout.component.scss'],
})
export class ClassLayoutComponent implements OnInit {
  buttons: ITopButton[] = [
    {
      text: 'Class',
      icon: 'ios-person-white.svg',
      redirectTo: 'class',
      active: true
    },
    {
      text: 'Feedback',
      icon: 'ios-journal.svg',
      redirectTo: 'feedback',
      active: false
    },


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
