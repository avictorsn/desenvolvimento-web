import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PricesPageComponent } from './pages/prices-page/prices-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'auth', component: AuthenticationPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'prices', component: PricesPageComponent},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
