import { Component, OnInit } from '@angular/core';
import {ICommon} from "../../interfaces/common.interfaces";
import ITopButton = ICommon.ITopButton;

@Component({
  selector: 'app-news-feed-layout',
  templateUrl: './news-feed-layout.component.html',
  styleUrls: ['./news-feed-layout.component.scss'],
})
export class NewsFeedLayoutComponent implements OnInit {
  topButtons: ITopButton[] = [
    {
      text: 'Feed',
      icon: 'ios-list-box-white.svg',
      redirectTo: 'news-feed',
      active: true
    },
    {
      text: 'Members',
      icon: 'ios-person-white.svg',
      redirectTo: 'members',
      active: false
    }
  ];
  constructor() { }

  ngOnInit() {}

}
