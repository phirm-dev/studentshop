import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemdetailsService } from '../itemdetails.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: string;
  itemDetails;
  bidDetails;

  constructor(private router: Router, private route: ActivatedRoute, private service: ItemdetailsService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    if (!this.id) {
      return this.router.navigate(['/app/dashboard']);
    }
    this.getItemDetails(this.id);
  }

  getItemDetails(id: string) {
    this.service.getItemDetails(id).subscribe(response => {
      console.log(response);
      this.itemDetails = response;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  deleteItem() {
    this.service.deleteItem(this.id).subscribe(response => {
      console.log(response);
      this.router.navigate(['/app']);
    });
  }

  populateDetails(bid) {
    this.bidDetails = bid;
  }

}
