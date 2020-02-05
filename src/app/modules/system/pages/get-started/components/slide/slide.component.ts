import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ISlideInfo} from "../../get-started.page";

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['../../slide.scss'],
})
export class SlideComponent {
    @Input() slide: ISlideInfo;
    @Output() nextSlide$: EventEmitter<void> = new EventEmitter<void>();

    constructor() {
    }


    nextSlide(): void {
        this.nextSlide$.emit()
    }
}
