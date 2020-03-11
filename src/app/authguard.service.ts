import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TokenService } from './auth/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router, private service: TokenService) { }

  canActivate() {
    if (this.service.isLoggedIn()) { return true; }
    this.router.navigate(['/app']);
    return false;
  }
}
