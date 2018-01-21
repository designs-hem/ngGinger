import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiGatewayService } from '../../core/services/api-gateway.service';
import { Response } from '@angular/http/src/static_response';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  private aboutContent: Response;
  constructor(private apiGatewayService: ApiGatewayService ) { 
    this.apiGatewayService.get('../../../assets/mocks/about.content.json').subscribe((res: Response)=>{
      console.log('response recieved', res);
      this.aboutContent = res;
    })
  }

  ngOnInit() { 
    // this.titleService.setTitle("GingerClub - About Us");
  }

}
