import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-qrcode',
  templateUrl: './modal-qrcode.component.html',
  styleUrls: ['./modal-qrcode.component.scss'],
})
export class ModalQrcodeComponent implements OnInit {

  constructor(private _modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this._modalController.dismiss()

  }
}
