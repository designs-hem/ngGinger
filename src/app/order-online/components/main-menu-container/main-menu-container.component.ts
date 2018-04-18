import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-menu-container',
  templateUrl: './main-menu-container.component.html',
  styleUrls: ['./main-menu-container.component.less']
})
export class MainMenuContainerComponent implements OnInit {
  @Input() mainMenuItems: string;

  constructor() { }

  ngOnInit() {
  }

}
