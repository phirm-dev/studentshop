import { Component, OnInit } from '@angular/core';
import { UploaditemService } from 'src/app/uploaditem/uploaditem.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DashboardService } from '../dashboard.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items;
  loading = true;
  helper = new JwtHelperService();
  profile;

  constructor(private itemService: UploaditemService, private router: Router, private service: DashboardService) { }

  ngOnInit() {
    this.getService();
  }

  getService() {
    this.itemService.getItem().subscribe(response => {
      this.items = response;
      this.loading = false;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  getProfile() {
    this.service.getUserProfile().subscribe(response => {
      this.profile = response;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  selectItem(item) {
    const path = `/app/item/details?id=${item._id}`;
    this.router.navigate([path]);
  }

  logOut() {
    localStorage.removeItem('token');
    window.location.pathname = '/auth/login';
  }

}
