import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-feedback',
  templateUrl: './leave-feedback.component.html',
  styleUrls: ['./leave-feedback.component.scss'],
})
export class LeaveFeedbackComponent implements OnInit {
  rate: any;

  constructor() { }

  ngOnInit() {}

  addFeedback() {

  }

  setRate($event: number) {
    
  }
}
