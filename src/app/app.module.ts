import { TesterComponent } from './components/tester/tester.component';
import { ApiService } from './services/api/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom components;
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

// Custom directives;
import { RedblackDirective } from './directives/redblack.directive';
import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { AlternaComponentesService } from './services/alternaComponetes/alterna-componentes.service';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { PlanejamentoComponent } from './components/planejamento/planejamento.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

// Custom services;

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
    VerticalNavbarComponent,
    PomodoroComponent,
    FlashcardComponent,
    PlanejamentoComponent,
    RelatoriosComponent,
    AgendaComponent,
    NoticiasComponent,
    TesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ AlternaComponentesService, ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
