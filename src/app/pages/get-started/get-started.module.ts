import {NgModule} from '@angular/core';
import {GetStartedPageRoutingModule} from './get-started-routing.module';

import {GetStartedPage} from './get-started.page';
import {SharedModule} from "../../shared/shared.module";
import {SlideComponent} from "./components/slide/slide.component";
import {PremiumSlideComponent} from "./components/premium-slide/premium-slide.component";

@NgModule({
    imports: [
        SharedModule,
        GetStartedPageRoutingModule
    ],
    declarations: [GetStartedPage, SlideComponent, PremiumSlideComponent]
})
export class GetStartedPageModule {
}
