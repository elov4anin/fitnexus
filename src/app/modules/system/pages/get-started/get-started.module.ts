import {NgModule} from '@angular/core';
import {GetStartedPageRoutingModule} from './get-started-routing.module';

import {GetStartedPage} from './get-started.page';
import {SharedModule} from "../../../../shared/shared.module";
import {UploadPhotoSlideComponent} from "./components/upload-photo-slide/upload-photo-slide.component";

@NgModule({
    imports: [
        SharedModule,
        GetStartedPageRoutingModule,
    ],
    declarations: [GetStartedPage, UploadPhotoSlideComponent]
})
export class GetStartedPageModule {
}
