import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() { 
    this.titleService.setTitle("GingerClub - About Us");
  }

}
