import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PricesPageComponent } from './pages/prices-page/prices-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SliderComponent } from './components/slider/slider.component';
import { GenericoComponent } from './components/generico/generico.component';
import { VerticalNavbarComponent } from './components/vertical-navbar/vertical-navbar.component';

import { RedblackDirective } from './directives/redblack.directive';
import { ChangeBackgroundDirective } from './directives/change-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    SignupPageComponent,
    NavbarComponent,
    AuthenticationPageComponent,
    AboutPageComponent,
    PricesPageComponent,
    RedblackDirective,
    ContactPageComponent,
    SliderComponent,
    ChangeBackgroundDirective,
    GenericoComponent,
    VerticalNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
