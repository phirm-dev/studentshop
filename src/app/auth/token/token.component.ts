import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from './token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  token: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: TokenService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      console.log(this.token);
    });
    if (this.token) {
      localStorage.setItem('token', this.token);
      this.router.navigate(['/app/dashboard']);
    } else {
      const isLoggedIn = this.service.isLoggedIn();
      if (!isLoggedIn) {
        return window.location.pathname = '/auth/login';
      }
      this.router.navigate(['/app/dashboard']);
    }
  }

}
