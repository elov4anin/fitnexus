import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {MainLayoutComponent} from "../modules/system/layouts/main-layout/main-layout.component";

const ANGULAR_MODULES = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
];

const COMPONENTS = [
    MainLayoutComponent,
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
