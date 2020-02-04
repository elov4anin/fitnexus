import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {SystemRoutingModule} from "./system-routing.module";
import {TabsComponent} from "./components/tabs/tabs.component";


@NgModule({
  declarations: [
    TabsComponent
  ],
  exports: [
  ],
  imports: [
    SharedModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
