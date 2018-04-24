import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Response } from "@angular/http/src/static_response";



@Injectable()
export class ApiGatewayService {

  constructor(private http: HttpClient) { }

  public get(endPoint: string, queryParam?: {}, headers?: HttpHeaders): Observable<any> {
    return this.http.get<Response>(endPoint, { params: queryParam });
  }

  public post(endPoint: string, payload?: {}, headers?: HttpHeaders): Observable<any> {
    const httpOptions = {
        headers: headers? headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<Response>(endPoint, payload);
  }

}