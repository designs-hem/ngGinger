import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LocationResponse } from '../../interfaces/location-modal.interface';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import { LocationService } from '../../../location/services/location.service';
declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.less']
})

export class LocationModalComponent implements OnInit {
  @Input() public locationData: LocationResponse;
  @Output() public locationFoundEvent: EventEmitter<void>;
  @Output() public locationSelectEvent: EventEmitter<number>;

  constructor(private locationService: LocationService) {
    this.locationSelectEvent = new EventEmitter();
    this.locationFoundEvent = new EventEmitter();
  }
  ngOnInit() {
    console.log('data recieved', this.locationData);
    if (this.locationService.isLocationExist) {
      this.locationFoundEvent.emit();
    }

  }

  public locationSelectHandler(locationId: number): void {
    this.locationService.currentLocationId = locationId;
    this.locationSelectEvent.emit(locationId);
  }

}
