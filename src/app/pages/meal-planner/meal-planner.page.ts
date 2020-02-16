import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from "@ionic/angular";
import {ISlideInfo} from "../get-started/get-started.page";

@Component({
  selector: 'app-meal-planner',
  templateUrl: './meal-planner.page.html',
  styleUrls: ['./meal-planner.page.scss'],
})
export class MealPlannerPage implements OnInit {

  pageTitle: string = "TRACKING - PROGRAMMES";
  @ViewChild('slider', {static: false}) slider: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true
  };
  sliders: ISlideInfo[] = [
    {
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    },
    {
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    },
    {
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    },
    {
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    },
    {
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    },
    {
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.sliders.push({
      title: "Cardio Basic",
      imgSrc: "/assets/images/news@2x.png"
    });
  }

  deleteSlide() {
  }
}
