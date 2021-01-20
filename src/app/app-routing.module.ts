import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './_guards/auth-guard.service';

const routes: Routes = [
  {path:'auth',loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)},
  {path:'',canActivate:[AuthGuardService], loadChildren: () => import('./home/home.module').then(module => module.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
