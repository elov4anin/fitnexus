import { Component, OnInit } from '@angular/core';
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-stat-program',
  templateUrl: './stat-program.page.html',
  styleUrls: ['./stat-program.page.scss'],
})
export class StatProgramPage extends PageBaseComponent implements OnInit {
  pageTitle: string = 'TRACKING - PROGRAMMES';

  constructor(private _router: Router) {
    super();
  }
  ngOnInit(): void {
  }

  openPrograms(): void {
    this._router.navigate(['/library-programs'])
  }

  addProgram(): void {
    this._router.navigate(['/training'])
  }
}
