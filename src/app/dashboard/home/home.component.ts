import { Component, OnInit } from '@angular/core';
import { UploaditemService } from 'src/app/uploaditem/uploaditem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items;
  loading = true;
  constructor(private itemService: UploaditemService, private router: Router) { }

  ngOnInit() {
    this.getService();
  }

  getService() {
    this.itemService.getItem().subscribe(response => {
      this.items = response;
      this.loading = false;
    });
  }

  selectItem(item) {
    const path = `/app/item/details?id=${item._id}`;
    console.log(path);
    this.router.navigate([path]);
  }

  logOut() {
    localStorage.removeItem('token');
    window.location.pathname = '/auth/login';
  }

}
