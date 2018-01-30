
import { NgModule } from '@angular/core'
import { NavHeaderComponent } from './components/nav-header.component'
import { RouterModule } from '@angular/router'
import { CommonModule} from '@angular/common';
import { LocationModule } from '../location/location.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
      RouterModule, 
      CommonModule,
      LocationModule,
      SharedModule
    ],
    declarations: [
      NavHeaderComponent
    ],
    exports: [NavHeaderComponent]
  })
  export class NavHeaderModule { }