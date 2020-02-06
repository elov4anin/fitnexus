import { NgModule } from '@angular/core';

import { NewsFeedPageRoutingModule } from './news-feed-routing.module';

import { NewsFeedPage } from './news-feed.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    NewsFeedPageRoutingModule
  ],
  declarations: [NewsFeedPage]
})
export class NewsFeedPageModule {}
