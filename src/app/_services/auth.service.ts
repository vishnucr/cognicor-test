import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { config } from "../_services/config.service";
 
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private _http: HttpClient,
    private _socialAuthService: SocialAuthService
  ) {}
  isLoggedIn() {
    let isLoggedIn = false;
    const user = localStorage.getItem("user");
    user ? (isLoggedIn = true) : (isLoggedIn = false);
    return isLoggedIn;
  }
  login(email, password) {
    const body = {
      email,
      password,
      returnSecureToken: true,
    };
    const headers: HttpHeaders = new HttpHeaders({
      "content-type": "application/json",
    });

    return this._http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.firebaseAPI}`,
      body,
      { headers }
    );
  }

  googleLogin() {
    return this._socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(){
    return this._socialAuthService.signOut(true)
  }
}
