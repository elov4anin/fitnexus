import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMeasurementsPageRoutingModule } from './new-measurements-routing.module';

import { NewMeasurementsPage } from './new-measurements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMeasurementsPageRoutingModule
  ],
  declarations: [NewMeasurementsPage]
})
export class NewMeasurementsPageModule {}
