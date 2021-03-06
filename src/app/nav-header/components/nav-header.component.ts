import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { LocationResponse } from '../../shared/interfaces/location-modal.interface';
import { LocationService } from '../../location/services/location.service';
declare var $: any;
@Component({
  selector: 'nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.less']
})

export class NavHeaderComponent implements OnInit {
  private locationResponse: LocationResponse;

  constructor(private locationService: LocationService){}
 ngOnInit() {
 }

}
