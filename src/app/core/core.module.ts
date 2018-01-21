
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ApiGatewayService } from './services/api-gateway.service';
@NgModule({
    providers: [
        ApiGatewayService
    ]
  })
  export class CoreModule { }