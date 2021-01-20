import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
// import { GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) {}
  public loginForm: FormGroup;
  get f() {
    return this.loginForm.controls;
  }

  login(event) {
    const email = this.f.username.value;
    const password = this.f.password.value;
    this._authService.login(email, password).subscribe(
      (res) => {
        localStorage.setItem("user", JSON.stringify({email}));
        this._router.navigate(["/"]);
        console.log(res);
      },
      (err) => {
        alert("LOGIN ERROR");
        console.log(err);
      }
    );
  }

  signInWithGoogle(): void {
    this._authService.googleLogin().then((res) => {
      localStorage.setItem("user", JSON.stringify(res));
      this._router.navigate(["/"]);
    });
  }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
}
