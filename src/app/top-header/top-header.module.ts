

import { NgModule } from '@angular/core'
import { TopHeaderComponent } from './components/top-header.component';

@NgModule({
    declarations: [
        TopHeaderComponent
    ],
    exports: [TopHeaderComponent]
  })
  export class TopHeaderModule { }