import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ItemsComponent } from './items/items.component';
import { BidsComponent } from './bids/bids.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [HomeComponent, NavComponent, ItemsComponent, BidsComponent]
})
export class DashboardModule { }
