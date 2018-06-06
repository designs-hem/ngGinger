import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Response } from '@angular/http/src/static_response';
import { ContentLoaderService } from '../../core/services/content-loader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  private aboutContent: {} | string;
  constructor(private contentLoader: ContentLoaderService ) {
      this.aboutContent = this.contentLoader.getContent('about');
  }

  ngOnInit() {
    // this.titleService.setTitle("GingerClub - About Us");
  }

}
