import { Component, OnInit } from "@angular/core";
// import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { AuthService } from "../_services/auth.service";
import { Router } from "@angular/router";
import { ChatServie } from "../_services/chat.service";

interface Chat {
  message: string;
  author: string;
  date?: Date;
}

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    // private _socialAuthService: SocialAuthService,
    private _authService: AuthService,
    private _router: Router,
    private _chatService: ChatServie
  ) {}
  public isMenuOpen = false;
  public initialLoading = true;
  public user: SocialUser;
  public loggedIn: boolean;
  public chatToggle = false;
  public chat: Chat[] = [];

  ngOnInit() {
    // this._socialAuthService.authState.subscribe((user) => {
    //   console.log(user);
    //   this.user = user;
    //   this.loggedIn = user != null;
    // });
    this._chatService.get().subscribe((res) => {
      this.chat.push(res);
    });
  }

  toggleMenu() {
    this.initialLoading = false;
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleChat() {
    this.chatToggle = !this.chatToggle;
  }

  logout() {
    this._authService
      .signOut()
      .then((res) => {
        localStorage.removeItem("user");
        this._router.navigate(["/auth"]);
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("user");
        this._router.navigate(["/auth"]);
      });
  }
}
