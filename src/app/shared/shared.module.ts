import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {NewsFeedLayoutComponent} from "./layouts/news-feed-layout/news-feed-layout.component";
import {CardNews} from "./components/card-news/card-news.component";
import {TrackingLayoutComponent} from "./layouts/tracking-layout/tracking-layout.component";
import {WeeklyStatComponent} from "./components/weekly-stat/weekly-stat.component";
import {LibraryLayoutComponent} from "./layouts/library-layout/library-layout.component";
import {BodyCompLayoutComponent} from "./layouts/body-comp-layout/body-comp-layout.component";

const ANGULAR_MODULES = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
];

const COMPONENTS = [
    MainLayoutComponent,
    NewsFeedLayoutComponent,
    CardNews,
    TrackingLayoutComponent,
    WeeklyStatComponent,
    LibraryLayoutComponent,
    BodyCompLayoutComponent,
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
