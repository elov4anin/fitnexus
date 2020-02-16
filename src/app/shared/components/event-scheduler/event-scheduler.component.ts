import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-scheduler',
  templateUrl: './event-scheduler.component.html',
  styleUrls: ['./event-scheduler.component.scss'],
})
export class EventSchedulerComponent implements OnInit {
  @Input() type: 'info' | 'cancel' = 'cancel';

  constructor() { }

  ngOnInit() {}

  onClick() {
    console.log('type', this.type);

  }
}
