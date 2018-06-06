import { RestMenuItem, MainMenuItemInterface } from './../../../../shared/interfaces/main-menu-interface';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SETTINGS } from '../../../../../environments/settings';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less']
})
export class MenuItemComponent implements OnInit {

  public menuItems: [RestMenuItem];
  @Input() mainMenuItem: MainMenuItemInterface;
  private imageURLEndPoint: string;
  private defaultImgURL: string;
  private restMenuId: string;

  constructor() {
    this.imageURLEndPoint = SETTINGS.ENDPOINT + SETTINGS.PATH;
    this.defaultImgURL = '../../../assets/img/noImage.jpg';
  }

  ngOnInit() {
    this.menuItems = this.mainMenuItem.restMenuItems;
    this.restMenuId = this.mainMenuItem.restMenuId;
  }

  public addMenuItem(restMenuItem: RestMenuItem) {
    console.log('restMenuItem', restMenuItem, this.restMenuId);
  }

}
