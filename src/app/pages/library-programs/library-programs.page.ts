import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ISlideInfo} from "../get-started/get-started.page";
import {IonSlides} from "@ionic/angular";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";

@Component({
    selector: 'app-library-programs',
    templateUrl: './library-programs.page.html',
    styleUrls: ['./library-programs.page.scss'],
})
export class LibraryProgramsPage extends PageBaseComponent implements OnInit, AfterViewInit {

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

    constructor() {
        super();
    }

    ngOnInit() {

    }

    ngAfterViewInit(): void {
        // this.slider.startAutoplay();
    }

    openFilter() {

    }
}
