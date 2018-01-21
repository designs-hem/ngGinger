import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Response } from "@angular/http/src/static_response";



@Injectable()
export class ApiGatewayService {

  constructor(private http: HttpClient) { }

  public get(endPoint: string, queryParam?: string, headers?: HttpHeaders): Observable<Response> {
    return this.http.get<Response>(endPoint)
  }

  public post(endPoint: string, payload?: string, headers?: HttpHeaders): Observable<Response> {
    const httpOptions = {
        headers: headers? headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<Response>(endPoint, payload)
  }

}