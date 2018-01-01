import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order-online',
  templateUrl: './order-online.component.html',
  styleUrls: ['./order-online.component.less']
})
export class OrderOnlineComponent implements OnInit {

  constructor(private titleService: Title) {
    
  }

  ngOnInit() {
    this.titleService.setTitle("GingerClub - Order Online");
  } 

}
