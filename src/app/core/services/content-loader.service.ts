
import { Injectable } from '@angular/core';
import { ApiGatewayService } from './api-gateway.service';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class ContentLoaderService {
  public appContent: Response;
  constructor(private apiGatewayService: ApiGatewayService) {}

  public loadContent() {
    this.apiGatewayService.get('../../../assets/mocks/app.content.json').subscribe((res: Response) => {
      console.log('response recieved', res);
      this.appContent = res;
    });
  }

  public getContent(pageId: string): {} | string {
    if (this.appContent) {
      return this.appContent[pageId] ? this.appContent[pageId] : 'something went wrong';
    }else {
      return 'something went wrong';
    }
  }
}
