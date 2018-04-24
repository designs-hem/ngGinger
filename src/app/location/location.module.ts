
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { LocationComponent } from './components/location.component';
import { SharedModule } from '../shared/shared.module';
import { LocationService } from './services/location.service';

@NgModule({
    imports: [ 
        CommonModule, 
        SharedModule
    ],
    declarations: [
        LocationComponent
    ],
    exports: [ LocationComponent],
    providers: [ LocationService ]
  })
  export class LocationModule { 
      constructor() {
      }
  }