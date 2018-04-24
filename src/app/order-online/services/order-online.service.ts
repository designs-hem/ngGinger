
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ApiGatewayService } from "../../core/services/api-gateway.service";
import { SETTINGS } from "../../../environments/settings";
import { Response } from '@angular/http';
@Injectable()
export class OrderOnlineService {

    constructor(
        private apiService: ApiGatewayService) { }

    public getAllMenuItems(locationId: number): Observable<Response> {
        return this.apiService.get(SETTINGS.ENDPOINT +'rest/orderOnline/allItems', { locationId: locationId.toString()});
    }
}