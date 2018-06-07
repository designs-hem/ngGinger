import { RestMenuItem, MainMenuItemInterface, CheckOutMenuItem } from './../../../../shared/interfaces/main-menu-interface';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SETTINGS } from '../../../../../environments/settings';
import { CheckOutDataService } from '../../../services/check-out-data.service';

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

  constructor(private checkOutDataService: CheckOutDataService) {
    this.imageURLEndPoint = SETTINGS.ENDPOINT + SETTINGS.PATH;
    this.defaultImgURL = '../../../assets/img/noImage.jpg';
  }

  ngOnInit() {
    this.menuItems = this.mainMenuItem.restMenuItems;
    this.restMenuId = this.mainMenuItem.restMenuId;
  }

  public getCheckOutMenuItem(restMenuItem: RestMenuItem): CheckOutMenuItem {
    const checkOutMenuItem: CheckOutMenuItem = {
      menuItemId: restMenuItem.restMenuItemId,
      menuName: restMenuItem.menuItemName,
      outOfStock: restMenuItem.outOfStock,
      unitPrice: restMenuItem.price
  };
    return checkOutMenuItem;

  }
  public addMenuItem(restMenuItem: RestMenuItem) {
    console.log('restMenuItem', restMenuItem, this.restMenuId);
    const checkOutMenuItem = this.getCheckOutMenuItem(restMenuItem);
    this.checkOutDataService.updateCart(checkOutMenuItem);
  }

}
