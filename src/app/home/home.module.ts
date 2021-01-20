import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { httpInterceptProviders } from "../_interceptors";
import { ChatComponent } from './chat/chat.component';
import { ReversePipe } from '../_pipes/reverse.pipe';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent, // sidebar and nav
    children: [
      { path: "", redirectTo: "dashboard" },
      { path: "dashboard", component: DashboardComponent },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent, DashboardComponent, ChatComponent, ReversePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [httpInterceptProviders],
})
export class HomeModule {}
