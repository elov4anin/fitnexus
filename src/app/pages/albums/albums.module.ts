import {NgModule} from '@angular/core';

import {AlbumsPageRoutingModule} from './albums-routing.module';

import {AlbumsPage} from './albums.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        AlbumsPageRoutingModule
    ],
    declarations: [AlbumsPage]
})
export class AlbumsPageModule {
}
