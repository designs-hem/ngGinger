import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
declare var $: any;

@Component({
  selector: 'nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.less']
})

export class NavHeaderComponent implements OnInit {
  ngOnInit() {
    $(document).ready(function () {
      setTimeout(function () {
        $('.setLocation').modal('show');
      }, 2000);
    });
  }

}
