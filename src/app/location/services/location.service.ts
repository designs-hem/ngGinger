import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { LocationResponse } from '../../shared/interfaces/location-modal.interface';
import { ApiGatewayService } from '../../core/services/api-gateway.service';
import { SETTINGS } from '../../../environments/settings';

@Injectable()
export class LocationService {

    public isLoacationExist = false;
    public currentLocationId: number;
    constructor(private apiService: ApiGatewayService) { }

    public getLocation(): Observable<LocationResponse> {
        return this.apiService.get(SETTINGS.ENDPOINT + 'rest/orderOnline/locations');
    }
}
