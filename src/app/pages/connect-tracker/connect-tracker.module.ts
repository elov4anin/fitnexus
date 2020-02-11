import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectTrackerPageRoutingModule } from './connect-tracker-routing.module';

import { ConnectTrackerPage } from './connect-tracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectTrackerPageRoutingModule
  ],
  declarations: [ConnectTrackerPage]
})
export class ConnectTrackerPageModule {}
