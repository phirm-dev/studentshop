import { Component, OnInit } from '@angular/core';
import { UploaditemService } from '../uploaditem.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: UploaditemService, private router: Router, private http: HttpClient) { }

  id;
  jwtHelper = new JwtHelperService();

  ngOnInit() {
    this.getIdandDecode();
  }

  getIdandDecode() {
    const token = localStorage.getItem('token');
    const decodedToken = this.jwtHelper.decodeToken(token);
    this.id = decodedToken.id;
  }


}
