import { Component, OnInit } from '@angular/core';
import { UploaditemService } from '../uploaditem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: UploaditemService, private router: Router) { }

  ngOnInit() {
  }

  submit(item: string, item_description: string, item_price: number) {
    const obj = {item, item_description, item_price};
    this.service.createItem(obj).subscribe(response => {
      console.log(response);
      this.router.navigate(['/app/dashboard']);
    });
  }

}
