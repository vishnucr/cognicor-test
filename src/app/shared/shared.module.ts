import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialLoginModule,

  ],
  exports:[SocialLoginModule,]
})
export class SharedModule {
  static forRoot(){
    return{
      ngModule:SharedModule,
      providers: [
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  '780375650637-8h5ukacf4j0stipqat6he9ndn8jdue08.apps.googleusercontent.com'
                )
              },
            ]
          } as SocialAuthServiceConfig,
        }
      ]  
    }
  }
 }
