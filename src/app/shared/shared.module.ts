import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {CardNews} from "./components/card-news/card-news.component";
import {WeeklyStatComponent} from "./components/weekly-stat/weekly-stat.component";
import {LibraryLayoutComponent} from "./layouts/library-layout/library-layout.component";
import {BodyCompLayoutComponent} from "./layouts/body-comp-layout/body-comp-layout.component";
import {CardChallengeComponent} from "./components/card-challenge/card-challenge.component";
import {EventSchedulerComponent} from "./components/event-scheduler/event-scheduler.component";
import {ClassLayoutComponent} from "./layouts/class-layout/class-layout.component";
import {MessagesLayoutComponent} from "./layouts/messages-layout/messages-layout.component";
import {MessagesIntoLayoutComponent} from "./layouts/messages-into-layout/messages-into-layout.component";
import {ButtonLayoutComponent} from "./layouts/button-layout/button-layout.component";
import {PageBaseComponent} from "./components/page-base/page-base.component";

const ANGULAR_MODULES = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
];

const COMPONENTS = [
    PageBaseComponent,
    MainLayoutComponent,
    CardNews,
    WeeklyStatComponent,
    LibraryLayoutComponent,
    BodyCompLayoutComponent,
    CardChallengeComponent,
    EventSchedulerComponent,
    ClassLayoutComponent,
    MessagesLayoutComponent,
    MessagesIntoLayoutComponent,
    ButtonLayoutComponent
];


@NgModule({
    imports: [
        ...ANGULAR_MODULES,
    ],
    exports: [
        ...ANGULAR_MODULES,
        ...COMPONENTS
    ],
    declarations: [
        ...COMPONENTS
    ]
})
export class SharedModule {

}
