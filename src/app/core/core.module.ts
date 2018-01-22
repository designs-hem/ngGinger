
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiGatewayService } from './services/api-gateway.service';
import { ContentLoaderService } from './services/content-loader.service';
@NgModule({
    imports: [ CommonModule],
    providers: [
        ApiGatewayService,
        ContentLoaderService
    ]
  })
  export class CoreModule { 
      constructor(private contentLoader: ContentLoaderService) {
          contentLoader.loadContent();
      }
  }