import { Component, OnInit } from '@angular/core';
import {PageBaseComponent} from '../../shared/components/page-base/page-base.component';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage extends PageBaseComponent  implements OnInit {
  pageTitle: string = 'Albums';

  constructor() {
    super()
  }

  ngOnInit() {
  }

  createAlbum() {

  }

  openAlbum() {

  }
}
