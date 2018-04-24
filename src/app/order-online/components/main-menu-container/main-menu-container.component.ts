import { Component, OnInit, Input } from '@angular/core';
import { MainMenuInterface } from '../../../shared/interfaces/main-menu-interface';

@Component({
  selector: 'app-main-menu-container',
  templateUrl: './main-menu-container.component.html',
  styleUrls: ['./main-menu-container.component.less']
})
export class MainMenuContainerComponent implements OnInit {
  @Input() mainMenuItems: [MainMenuInterface];

  constructor() { }

  ngOnInit() {
  }

}
