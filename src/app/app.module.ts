import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from 'bootstrap';
// import '../assets/less/common.less';
// import '../assets/less/responsive.less';
import { Component } from '@angular/core/src/metadata/directives';
import { APPROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { TeamModule } from './team/team.module';
import { OrderOnlineModule } from './order-online/order-online.module';
import { ContactModule } from './contact/contact.module';
import { TopHeaderModule } from './top-header/top-header.module';
import { NavHeaderModule } from './nav-header/nav-header.module';
import { HttpClientModule} from '@angular/common/http'
import { CoreModule } from './core/core.module'
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    NavHeaderModule,
    HomeModule,
    AboutModule,
    TeamModule,
    OrderOnlineModule,
    ContactModule,
    TopHeaderModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(APPROUTES)
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }