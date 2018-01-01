import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from 'bootstrap';
// import '../assets/less/common.less';
// import '../assets/less/responsive.less';

import { GingerHeaderComponent } from './ginger-header/ginger-header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Component } from '@angular/core/src/metadata/directives';
import { TeamComponent } from './team/team.component';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { ContactComponent } from './contact/contact.component';
import { TopHeaderComponent } from './top-header/top-header.component';

@NgModule({
  declarations: [
    GingerHeaderComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    OrderOnlineComponent,
    ContactComponent,
    TopHeaderComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'team', component: TeamComponent },
      { path: 'order-online', component: OrderOnlineComponent },
      { path: 'contacts', component: ContactComponent }
    ])
  ],
  providers: [Title],
  bootstrap: [TopHeaderComponent, GingerHeaderComponent]
})
export class AppModule { }