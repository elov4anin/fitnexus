import { Component, OnInit } from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.page.html',
  styleUrls: ['./my-bookings.page.scss'],
})
export class MyBookingsPage extends PageBaseComponent implements OnInit {
  pageTitle: string = 'Classes - Bookings';
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
