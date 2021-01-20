import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor( private _authService : AuthService, private _router : Router ) {
  }

  canActivate() {
    if(this._authService.isLoggedIn()) return true;
    // else navigate to login
    this._router.navigate(['/auth'])
  }
}
