import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";

const ANGULAR_MODULES = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
];

const COMPONENTS = [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent
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
