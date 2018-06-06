import { Component, OnInit } from '@angular/core';
import { LocationResponse } from '../../shared/interfaces/location-modal.interface';
import { LocationService } from '../services/location.service';
declare var $: any;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'location-selector',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.less']
})
export class LocationComponent implements OnInit {

  public locationResponse: LocationResponse;
  constructor(private locationService: LocationService) {

  }
  ngOnInit() {
  }

  public showModal() {
    if (this.locationService.isLocationExist) {
      $('#locationMmDiv').modal('show');
    }else {
        this.locationService.getLocation().subscribe((res: any) => {
        this.locationResponse = <LocationResponse>res.data;
        this.locationResponse ? this.locationService.isLocationExist = true : this.locationService.isLocationExist = false;
      });
    }

  }

  public locationModalExist() {
    $('#locationMmDiv').modal('show');
  }

}
