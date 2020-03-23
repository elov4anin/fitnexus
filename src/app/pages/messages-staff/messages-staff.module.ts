import {NgModule} from '@angular/core';

import {MessagesStaffPageRoutingModule} from './messages-staff-routing.module';

import {MessagesStaffPage} from './messages-staff.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        MessagesStaffPageRoutingModule
    ],
    declarations: [MessagesStaffPage]
})
export class MessagesStaffPageModule {
}
