import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  token: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      console.log(this.token);
    });
    if (this.token) {
      localStorage.setItem('token', this.token);
      this.router.navigate(['/app/dashboard']);
    } else {
      const token = localStorage.getItem('token');
      if (!token) { return window.location.pathname = '/auth/login'; }
      this.router.navigate(['/app/dashboard']);
    }
  }

}
