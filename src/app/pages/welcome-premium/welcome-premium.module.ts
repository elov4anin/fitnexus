import { NgModule } from '@angular/core';

import { WelcomePremiumPageRoutingModule } from './welcome-premium-routing.module';

import { WelcomePremiumPage } from './welcome-premium.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    WelcomePremiumPageRoutingModule,
    SharedModule
  ],
  declarations: [WelcomePremiumPage]
})
export class WelcomePremiumPageModule {}
