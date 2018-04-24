import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import '../../../assets/js/flexslider-min.js';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less', '../../../assets/less/flexslider.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    $(document).ready(function () {
      $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true
      });
    });

    this.titleService.setTitle("GingerClub");
  }
}
