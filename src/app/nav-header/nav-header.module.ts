
import { NgModule } from '@angular/core'
import { NavHeaderComponent } from './components/nav-header.component'
import { RouterModule } from '@angular/router'
@NgModule({
    imports: [RouterModule],
    declarations: [
      NavHeaderComponent
    ],
    exports: [NavHeaderComponent]
  })
  export class NavHeaderModule { }