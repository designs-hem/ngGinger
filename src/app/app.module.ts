import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
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
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NavHeaderModule,
    HomeModule,
    AboutModule,
    TeamModule,
    OrderOnlineModule,
    ContactModule,
    TopHeaderModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(APPROUTES)
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }