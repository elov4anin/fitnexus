import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {CardNews} from "./components/card-news/card-news.component";
import {WeeklyStatComponent} from "./components/weekly-stat/weekly-stat.component";
import {CardChallengeComponent} from "./components/card-challenge/card-challenge.component";
import {EventSchedulerComponent} from "./components/event-scheduler/event-scheduler.component";
import {ButtonLayoutComponent} from "./layouts/button-layout/button-layout.component";
import {PageBaseComponent} from "./components/page-base/page-base.component";
import {ButtonIntoLayoutComponent} from "./layouts/button-into-layout/button-into-layout.component";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {CalendarModule} from "ion2-calendar";
import {ModalQrcodeComponent} from './modals/modal-qrcode/modal-qrcode.component';
import {QrCodeModule} from 'ng-qrcode';
import {ModalConnectDevicesComponent} from './modals/modal-connect-devices/modal-connect-devices.component';
import {ModalDayStatComponent} from './modals/modal-day-stat/modal-day-stat.component';

const ANGULAR_MODULES = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,

    PerfectScrollbarModule,
    CalendarModule,

    QrCodeModule,
];

const COMPONENTS = [
    PageBaseComponent,
    MainLayoutComponent,
    ButtonLayoutComponent,
    ButtonIntoLayoutComponent,
    CardNews,
    WeeklyStatComponent,
    CardChallengeComponent,
    EventSchedulerComponent,

];

const MODALS = [
    ModalQrcodeComponent,
    ModalConnectDevicesComponent,
    ModalDayStatComponent
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
        ...COMPONENTS,
        ...MODALS
    ],
    entryComponents: [
        ...MODALS
    ]
})
export class SharedModule {

}
