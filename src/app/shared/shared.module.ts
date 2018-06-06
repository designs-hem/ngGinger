import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationModalComponent } from './components/location-modal/location-modal.component';
@NgModule({
  imports: [CommonModule],
  declarations: [
    LocationModalComponent
  ],
  exports: [LocationModalComponent]
})

export class SharedModule {

}
