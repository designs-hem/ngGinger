import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CheckOutDataService {

  private checkOutSource = new BehaviorSubject<any>(false);
  public checkOutData = this.checkOutSource.asObservable();
  constructor() { }

  public updateCart(checkOutData: any) {
    this.checkOutSource.next(checkOutData);
  }
}
