

import { NgModule } from '@angular/core'
import { OrderOnlineComponent } from './components/order-online.component';
import { CommonModule} from '@angular/common';
import { LocationModule } from '../location/location.module';
import { SharedModule } from '../shared/shared.module';
import { OrderOnlineService } from './services/order-online.service';
import { CartComponent } from './components/cart/cart.component';
@NgModule({
    imports: [LocationModule, SharedModule, CommonModule],
    declarations: [
        OrderOnlineComponent,
        CartComponent
    ],
    providers: [ OrderOnlineService ]
  })
  export class OrderOnlineModule { }