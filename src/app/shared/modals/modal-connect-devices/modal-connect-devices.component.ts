import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-connect-devices',
  templateUrl: './modal-connect-devices.component.html',
  styleUrls: ['./modal-connect-devices.component.scss'],
})
export class ModalConnectDevicesComponent implements OnInit {

  constructor(private _modalController: ModalController) { }

  ngOnInit() {}
  dismissModal() {
    this._modalController.dismiss()

  }

  addDevice() {
    this.dismissModal()
  }
}
