import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

import {
    TabsEnum, TabsEnum2ActivePagesMapping,
    TabsEnum2IconActiveMapping,
    TabsEnum2IconMapping,
    TabsEnum2RoutingMapping
} from "../../enums/tabs.enum";
import {ModalController} from '@ionic/angular';
import {ModalQrcodeComponent} from '../../modals/modal-qrcode/modal-qrcode.component';


@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
    @Input() titlePage: string;
    @Input() isAccount: boolean = false;
    @Input() isNeedBack: boolean = false;
    @Input() isNeedLogo: boolean = false;
    @Input() backRoute: string;

    public readonly tabs = Object.keys(TabsEnum).map(
        (key) => TabsEnum[key]
    );

    public readonly TabsEnum2IconMapping = TabsEnum2IconMapping;
    public readonly TabsEnum2RoutingMapping = TabsEnum2RoutingMapping;

    constructor(private _router: Router, private _location: Location, private _modalController: ModalController) {
    }

    ngOnInit(): void {
    }

    tabClicked(tab): void {
        this._router.navigate(['/', tab]);
    }

    getActiveTabIcon(currentRoute: string): string {
        const url = this._router.url.includes('/') ? this._router.url.split('/')[1] : this._router.url;
        switch (currentRoute) {
            case TabsEnum.NEWS:
                const activePages: string[] = ['news-feed'];
                if (TabsEnum2ActivePagesMapping[currentRoute].includes(url)) {
                    return TabsEnum2IconActiveMapping[currentRoute]
                } else {
                    return TabsEnum2IconMapping[currentRoute]
                }
            case TabsEnum.STATS:
                if (TabsEnum2ActivePagesMapping[currentRoute].includes(url)) {
                    return TabsEnum2IconActiveMapping[currentRoute]
                } else {
                    return TabsEnum2IconMapping[currentRoute]
                }
            case TabsEnum.CALENDAR:
                if (TabsEnum2ActivePagesMapping[currentRoute].includes(url)) {
                    return TabsEnum2IconActiveMapping[currentRoute]
                } else {
                    return TabsEnum2IconMapping[currentRoute]
                }
            case TabsEnum.RATING:
                if (TabsEnum2ActivePagesMapping[currentRoute].includes(url)) {
                    return TabsEnum2IconActiveMapping[currentRoute]
                } else {
                    return TabsEnum2IconMapping[currentRoute]
                }
            case TabsEnum.FOOD:
                if (TabsEnum2ActivePagesMapping[currentRoute].includes(url)) {
                    return TabsEnum2IconActiveMapping[currentRoute]
                } else {
                    return TabsEnum2IconMapping[currentRoute]
                }

        }
    }

    back() {
        if (!!this.backRoute) {
            this._router.navigate(['/', this.backRoute])
        } else {
            this._location.back()
        }
    }

    async openQrCodeModal() {
        const modal = await this._modalController.create({
            component: ModalQrcodeComponent
        });
        return await modal.present();
    }
}
