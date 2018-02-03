

import { NgModule } from '@angular/core'
import { OrderOnlineComponent } from './components/order-online.component';
import { CommonModule} from '@angular/common';
import { LocationModule } from '../location/location.module';
import { SharedModule } from '../shared/shared.module';
import { OrderOnlineService } from './services/order-online.service';
@NgModule({
    imports: [LocationModule, SharedModule, CommonModule],
    declarations: [
        OrderOnlineComponent
    ],
    providers: [ OrderOnlineService ]
  })
  export class OrderOnlineModule { }