import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LocationService } from '../../location/services/location.service';
import { LocationResponse } from '../../shared/interfaces/location-modal.interface';
import { EventEmitter } from 'events';
import { OrderOnlineService } from '../services/order-online.service';
import '../../../assets/js/easyTabs.js';
import { MainMenuInterface } from '../../shared/interfaces/main-menu-interface';

declare var $: any;
@Component({
  selector: 'app-order-online',
  templateUrl: './order-online.component.html',
  styleUrls: ['./order-online.component.less']
})
export class OrderOnlineComponent implements OnInit {
  public mainMenuItems: [MainMenuInterface];
  private locationResponse: LocationResponse;
  private menuResponse;
  constructor(
    private titleService: Title,
    private locationService: LocationService,
    private orderOnlineService: OrderOnlineService) {
  }

  ngOnInit() {
    this.titleService.setTitle('GingerClub - Order Online');
    if (!this.locationService.isLocationExist) {
      this.locationService.getLocation().subscribe((res: any) => {
        this.locationResponse = <LocationResponse>res.data;
        this.locationResponse ? this.locationService.isLocationExist = true : this.locationService.isLocationExist = false;
      });
    } else {
      this.loadMenu();
    }
  }
  public locationModalExist() {
    $('#locationMmDiv').modal('show');
  }

  public locationSelectionEvent() {
    this.loadMenu();
  }

  private loadMenu(): void {
    $('#locationMmDiv').modal('hide');
    this.orderOnlineService.getAllMenuItems(this.locationService.currentLocationId).subscribe((res: any) => {
      console.log('response recieved for order online', res);
      this.menuResponse = res.data;
      this.mainMenuItems = this.menuResponse.map((menuItem) =>
        <MainMenuInterface>{ name: menuItem.name, restMenuId: menuItem.restMenuId });

      setTimeout(() => {
        $('.gingerMenus').easyResponsiveTabs({
          type: 'vertical',
          width: 'auto',
          fit: true
        });
      }, 0);

    });
  }

}
