import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PageBaseComponent} from "../../shared/components/page-base/page-base.component";
import {ModalController} from '@ionic/angular';
import {ModalConnectDevicesComponent} from '../../shared/modals/modal-connect-devices/modal-connect-devices.component';

@Component({
    selector: 'app-stats',
    templateUrl: './add-device.page.html',
    styleUrls: ['./add-device.page.scss'],
})
export class AddDevicePage extends PageBaseComponent implements OnInit {
    pageTitle: string = 'Tracking - Wearables & Apps';

    constructor(private _router: Router, private _modalController: ModalController) {
        super();
    }

    ngOnInit() {
    }

    addDevice(): void {
        this._router.navigate(['/stat-by-device']);
    }

    async openAddDeviceModal() {
        const modal = await this._modalController.create({
            component: ModalConnectDevicesComponent
        });
        return await modal.present();
    }
}
