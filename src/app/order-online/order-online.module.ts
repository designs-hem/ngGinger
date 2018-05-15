

import { NgModule } from '@angular/core';
import { OrderOnlineComponent } from './components/order-online.component';
import { CommonModule } from '@angular/common';
import { LocationModule } from '../location/location.module';
import { SharedModule } from '../shared/shared.module';
import { OrderOnlineService } from './services/order-online.service';
import { CartComponent } from './components/cart/cart.component';
import { MainMenuContainerComponent } from './components/main-menu-container/main-menu-container.component';
import { MainMenuItemsContainerComponent } from './components/main-menu-items-container/main-menu-items-container.component';
import { MenuItemComponent } from './components/main-menu-items-container/menu-item/menu-item.component';
@NgModule({
    imports: [LocationModule, SharedModule, CommonModule],
    declarations: [
        OrderOnlineComponent,
        CartComponent,
        MainMenuContainerComponent,
        MainMenuItemsContainerComponent,
        MenuItemComponent
    ],
    providers: [OrderOnlineService]
})
export class OrderOnlineModule { }
