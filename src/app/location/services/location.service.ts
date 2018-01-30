import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { LocationResponse } from "../../shared/interfaces/location-modal.interface";
import { ApiGatewayService } from "../../core/services/api-gateway.service";

@Injectable()
export class LocationService {

    public isLoacationExist: boolean = false;
    constructor(private apiService: ApiGatewayService) { }

    public getLocation(): Observable<LocationResponse> {
        return this.apiService.get('http://localhost:8080/GingerClub/rest/orderOnline/locations');
    }
}