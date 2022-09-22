import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpcComponent } from './helpc/helpc.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot([
        {path: 'about', component: AboutComponent },
        {path: 'help', component: HelpcComponent},
        {path: 'home', component: HomeComponent},
        {path: 'profile', component: ProfileComponent},


      ]),],
  exports: [RouterModule]
})
export class AppRoutingModule { }


