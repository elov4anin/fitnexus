import {NgModule} from '@angular/core';

import {ChatPageRoutingModule} from './chat-routing.module';

import {ChatPage} from './chat.page';
import {SharedModule} from "../../shared/shared.module";
import {MessageComponent} from "./message/message.component";

@NgModule({
    imports: [
        SharedModule,
        ChatPageRoutingModule
    ],
    declarations: [ChatPage, MessageComponent]
})
export class ChatPageModule {
}
