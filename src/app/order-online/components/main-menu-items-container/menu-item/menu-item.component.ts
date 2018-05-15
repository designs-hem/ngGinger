import { RestMenuItem } from './../../../../shared/interfaces/main-menu-interface';
import { Component, OnInit, Input } from '@angular/core';
import { SETTINGS } from '../../../../../environments/settings';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItems: [RestMenuItem];
  private imageURLEndPoint: string;
  private defaultImgURL: string;


  constructor() {
    this.imageURLEndPoint = SETTINGS.ENDPOINT + SETTINGS.PATH;
    this.defaultImgURL = '../../../assets/img/noImage.jpg';
  }

  ngOnInit() {
    // menuItem.restMenuItems
    console.log(this.menuItems);
  }

}
