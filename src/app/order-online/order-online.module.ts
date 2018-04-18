

import { NgModule } from '@angular/core'
import { OrderOnlineComponent } from './components/order-online.component';
import { CommonModule} from '@angular/common';
import { LocationModule } from '../location/location.module';
import { SharedModule } from '../shared/shared.module';
import { OrderOnlineService } from './services/order-online.service';
import { CartComponent } from './components/cart/cart.component';
import { MainMenuContainerComponent } from './components/main-menu-container/main-menu-container.component';
@NgModule({
    imports: [LocationModule, SharedModule, CommonModule],
    declarations: [
        OrderOnlineComponent,
        CartComponent,
        MainMenuContainerComponent
    ],
    providers: [ OrderOnlineService ]
  })
  export class OrderOnlineModule { }