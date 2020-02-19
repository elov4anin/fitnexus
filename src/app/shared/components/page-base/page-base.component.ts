import { Component, OnInit } from '@angular/core';
import {LayoutsEnum} from "../../enums/layouts.enum";

@Component({
  selector: 'app-page-base',
  template: '<div>base</div>',
  styleUrls: ['./page-base.component.scss'],
})
export class PageBaseComponent implements OnInit {
  readonly listBtnForLayout = LayoutsEnum;
  constructor() { }

  ngOnInit() {}

}
