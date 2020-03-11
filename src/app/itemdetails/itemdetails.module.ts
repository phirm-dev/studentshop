import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemdetailsRoutingModule } from './itemdetails-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BidmodalComponent } from './bidmodal/bidmodal.component';

@NgModule({
  imports: [
    CommonModule,
    ItemdetailsRoutingModule
  ],
  declarations: [HomeComponent, NavComponent, BidmodalComponent]
})
export class ItemdetailsModule { }
