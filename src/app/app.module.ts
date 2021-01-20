import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { ReversePipe } from './_pipes/reverse.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,SocialLoginModule,HttpClientModule],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "780375650637-8h5ukacf4j0stipqat6he9ndn8jdue08.apps.googleusercontent.com"
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
