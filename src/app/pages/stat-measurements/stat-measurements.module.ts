import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatMeasurementsPageRoutingModule } from './stat-measurements-routing.module';

import { StatMeasurementsPage } from './stat-measurements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatMeasurementsPageRoutingModule
  ],
  declarations: [StatMeasurementsPage]
})
export class StatMeasurementsPageModule {}
