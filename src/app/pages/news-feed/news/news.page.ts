import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  pageTitle: string = '';
  repeat: number[] = [1,2,3,4,5,6,7,8];
  constructor() { }

  ngOnInit() {
  }

}
