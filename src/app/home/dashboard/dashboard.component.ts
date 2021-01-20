import { Component, OnInit } from "@angular/core";
import { SocialAuthService, SocialUser } from "angularx-social-login";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private _socialAuthService: SocialAuthService) {}

  public user: SocialUser;

  ngOnInit(): void {
    this._socialAuthService.authState.subscribe((user) => {
      this.user = user;
    });
  }
}
