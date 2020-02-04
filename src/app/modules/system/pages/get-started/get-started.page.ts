import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.page.html',
  styleUrls: ['./get-started.page.scss'],
})
export class GetStartedPage implements OnInit {
    pageTitle: string = 'Welcome to fitnexus';

  constructor() { }

  ngOnInit() {
  }

}
