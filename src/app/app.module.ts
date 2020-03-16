import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'app/dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthguardService] },
  { path: 'app/item/details', loadChildren: './itemdetails/itemdetails.module#ItemdetailsModule', canActivate: [AuthguardService] },
  { path: 'app/item', loadChildren: './uploaditem/uploaditem.module#UploaditemModule', canActivate: [AuthguardService] },
  { path: 'app', loadChildren: './auth/auth.module#AuthModule' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FileUploadModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
