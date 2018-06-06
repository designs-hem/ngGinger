import { CheckOutMenuItem } from './../../../shared/interfaces/main-menu-interface';
import { CheckOutDataService } from './../../services/check-out-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  public checkOutMenuItems: [CheckOutMenuItem];

  constructor(private checkOutDataService: CheckOutDataService) {
    this.checkOutMenuItems = null;
  }

  ngOnInit() {
    this.checkOutDataService.checkOutData.subscribe(
      (checkOutMenuItem: CheckOutMenuItem) => {
        if (this.checkOutMenuItems) {
          this.checkOutMenuItems.push(checkOutMenuItem);
        } else if (checkOutMenuItem) {
          this.checkOutMenuItems =  [checkOutMenuItem];
        }
      }
    );
  }

}
