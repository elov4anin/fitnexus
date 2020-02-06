import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {SubmenuButtonsComponent} from "./components/submenu-buttons/submenu-buttons.component";
import {NewsFeedLayoutComponent} from "./layouts/news-feed-layout/news-feed-layout.component";
import {CardNews} from "./components/card-news/card-news.component";

const ANGULAR_MODULES = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
];

const COMPONENTS = [
    MainLayoutComponent,
    NewsFeedLayoutComponent,
    SubmenuButtonsComponent,
    CardNews
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
