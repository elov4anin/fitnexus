import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-challenge',
  templateUrl: './card-challenge.component.html',
  styleUrls: ['./card-challenge.component.scss'],
})
export class CardChallengeComponent implements OnInit {
  @Input() needDescription: boolean = false;

  constructor() { }

  ngOnInit() {}

}
