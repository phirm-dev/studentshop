import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaditemRoutingModule } from './uploaditem-routing.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    UploaditemRoutingModule,
    HttpClientModule,
    FileUploadModule,
  ],
  declarations: [HomeComponent, NavComponent]
})
export class UploaditemModule { }
