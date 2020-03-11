import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bidmodal',
  templateUrl: './bidmodal.component.html',
  styleUrls: ['./bidmodal.component.css']
})
export class BidmodalComponent implements OnInit {

  @Input() bidDetails: any;

  constructor() { }

  ngOnInit() {
  }

}
