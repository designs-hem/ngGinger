import { MainMenuItemInterface } from './../../../shared/interfaces/main-menu-interface';
import { Component, OnInit, Input } from '@angular/core';
import { SETTINGS } from '../../../../environments/settings';

@Component({
  selector: 'app-main-menu-items-container',
  templateUrl: './main-menu-items-container.component.html',
  styleUrls: ['./main-menu-items-container.component.less']
})
export class MainMenuItemsContainerComponent implements OnInit {
  @Input() menuResponse: [MainMenuItemInterface];
  private imageURLEndPoint: string;
  private defaultImgURL: string;


  constructor() {
    this.imageURLEndPoint = SETTINGS.ENDPOINT + 'ginger_menu_item_images';
    this.defaultImgURL = '../../../assets/img/noImage.jpg';
   }

  ngOnInit() {
  }

}

