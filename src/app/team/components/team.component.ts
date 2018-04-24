import { Component, OnInit } from '@angular/core';
import { ContentLoaderService } from '../../core/services/content-loader.service'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {
  private teamContent: {} | string;
  constructor(private contentLoader: ContentLoaderService) { }

  ngOnInit() {
    this.teamContent = this.contentLoader.getContent('team');
    // this.titleService.setTitle("GingerClub - Team");
  }

}
