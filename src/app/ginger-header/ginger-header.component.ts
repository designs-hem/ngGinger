import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

declare var $: any;

@Component({
  selector: 'app-ginger',
  templateUrl: './ginger-header.component.html',
  styleUrls: ['./ginger-header.component.less']
})

export class GingerHeaderComponent implements OnInit {
  // data: any = null;
  // constructor(private _http: Http) {
  //   this.getLocation();
  // }

  ngOnInit() {
    $(document).ready(function () {
      setTimeout(function () {
        $('.setLocation').modal('show');
      }, 2000);
    });
  }

  // private getLocation() {
  //   return this._http.get('http://localhost:8080/GingerClub/rest/orderOnline/locations')
  //     .map((res: Response) => res.json())
  //     .subscribe(data => {
  //       this.data = data.data[0];
  //     });
  // }

}
