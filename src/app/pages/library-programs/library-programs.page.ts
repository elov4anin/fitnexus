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
        loop: true,
        slidesPerView: 2,
    };
    sliders: ISlideInfo[] = [
        {
            title: "Cardio Basic 1",
            imgSrc: "/assets/images/news@2x.png"
        },
        {
            title: "Cardio Basic 2",
            imgSrc: "/assets/images/news@2x.png"
        },
        {
            title: "Cardio Basic 3",
            imgSrc: "/assets/images/news@2x.png"
        },
        {
            title: "Cardio Basic 4",
            imgSrc: "/assets/images/news@2x.png"
        },
        {
            title: "Cardio Basic 5",
            imgSrc: "/assets/images/news@2x.png"
        },
        {
            title: "Cardio Basic 6",
            imgSrc: "/assets/images/news@2x.png"
        }
    ];
    selectedBodyFilter: any;
    selectedDiffFilter: any;

    constructor() {
        super();
    }

    ngOnInit() {

    }

    ionViewDidEnter() {
        const ionSelects = document.querySelectorAll('ion-select');
        ionSelects.forEach((ionSelect) => {
            const selectIconInner = ionSelect.shadowRoot.querySelector('.select-icon').querySelector('.select-icon-inner');
            if(selectIconInner){
                selectIconInner.setAttribute('style', 'display: none !important');
            }
        });
    }

    ngAfterViewInit(): void {
        this.slider.startAutoplay();
    }

    openFilter() {

    }
}
