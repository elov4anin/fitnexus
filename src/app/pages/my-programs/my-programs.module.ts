import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProgramsPageRoutingModule } from './my-programs-routing.module';

import { MyProgramsPage } from './my-programs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyProgramsPageRoutingModule
  ],
  declarations: [MyProgramsPage]
})
export class MyProgramsPageModule {}
