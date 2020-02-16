import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-scheduler',
  templateUrl: './event-scheduler.component.html',
  styleUrls: ['./event-scheduler.component.scss'],
})
export class EventSchedulerComponent implements OnInit {
  @Input() type: 'info' | 'cancel' = 'cancel';

  constructor(private _router: Router) { }

  ngOnInit() {}

  onClick() {
    console.log('type', this.type);
    if (this.type === 'info') {
      this._router.navigate(["/class"])
    }

  }
}
