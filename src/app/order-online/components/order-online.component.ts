import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LocationService } from '../../location/services/location.service';
import { LocationResponse } from '../../shared/interfaces/location-modal.interface';
import { EventEmitter } from 'events';
import { OrderOnlineService } from '../services/order-online.service';
import { SETTINGS } from '../../../environments/settings';
import '../../../assets/js/easyTabs.js';
declare var $: any;
@Component({
  selector: 'app-order-online',
  templateUrl: './order-online.component.html',
  styleUrls: ['./order-online.component.less']
})
export class OrderOnlineComponent implements OnInit  {
  private locationResponse: LocationResponse;
  private menuResponse;
  private imageURLEndPoint: string;
  private defaultImgURL: string;

  constructor(
    private titleService: Title, 
    private locationService: LocationService,
    private orderOnlineService: OrderOnlineService) {
    this.imageURLEndPoint = SETTINGS.ENDPOINT + 'ginger_menu_item_images';
    this.defaultImgURL = '../../../assets/img/noImage.jpg';
  }

  ngOnInit() {
    this.titleService.setTitle("GingerClub - Order Online");
    if (!this.locationService.isLoacationExist) {
      this.locationService.getLocation().subscribe((res: any) => {
        this.locationResponse = <LocationResponse>res.data;
        this.locationResponse ? this.locationService.isLoacationExist = true : this.locationService.isLoacationExist = false;
      })
    }else {
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
      console.log("response recieved for order online", res);
      this.menuResponse = res.data;
      setTimeout(()=> {
        $('.gingerMenus').easyResponsiveTabs({
          type: 'vertical',
          width: 'auto',
          fit: true
        });
      }, 0);
      
    })
  }
  
}
