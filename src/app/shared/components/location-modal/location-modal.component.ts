import { Component, OnInit, Input } from '@angular/core';
import { LocationResponse } from '../../interfaces/location-modal.interface';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import { LocationService } from '../../../location/services/location.service';
declare var $: any;

@Component({
  selector: 'location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.less']
})

export class LocationModalComponent implements OnInit {
  @Input() public locationData: LocationResponse;
  constructor(private locationService: LocationService)
  {}
  ngOnInit() {
    console.log('data recieved', this.locationData);
    if (this.locationService.isLoacationExist) {
      // $('#locationMmDiv').modal('show');
    }

  }

}
