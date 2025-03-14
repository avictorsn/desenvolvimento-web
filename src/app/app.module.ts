import { GoogleNewsApiService } from './services/googlenewsAPI/google-news-api.service';
import { FlashcardListService } from './services/flashcardList/flashcard-list.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
// import { NgCircleProgressModule } from 'ng-circle-progress';


import { AppComponent } from './app.component';

// Custom components;
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PricesPageComponent } from './pages/prices-page/prices-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SliderComponent } from './components/slider/slider.component';
import { GenericoComponent } from './components/generico/generico.component';
import { VerticalNavbarComponent } from './components/vertical-navbar/vertical-navbar.component';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { PlanejamentoComponent } from './components/planejamento/planejamento.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { FlashcardFormComponent } from './components/flashcard-form/flashcard-form.component';
import { FlashcardListComponent } from './components/flashcard-list/flashcard-list.component';
import { FlashcardContainerComponent } from './components/flashcard-container/flashcard-container.component';
import { FlashcardGroupListComponent } from './components/flashcard-group-list/flashcard-group-list.component';
import { FlashcardGroupFormComponent } from './components/flashcard-group-form/flashcard-group-form.component';

// Custom directives;
import { RedblackDirective } from './directives/redblack.directive';
import { ChangeBackgroundDirective } from './directives/change-background.directive';

// Custom services;
import { ApiService } from './services/api/api.service';
import { AlternaComponentesService } from './services/alternaComponetes/alterna-componentes.service';
import { SelectFlashcardGroupService } from './services/selectFlashcardGroup/select-flashcard-group.service';
import { PomodoroService } from './services/pomodoro/pomodoro.service';
import { CriarPlanejamentoComponent } from './components/criar-planejamento/criar-planejamento.component';
import { ListaPlanejamentoComponent } from './components/lista-planejamento/lista-planejamento.component';
import { LoadingIconComponent } from './components/loading-icon/loading-icon.component';
import { ErrorIconComponent } from './components/error-icon/error-icon.component';
import { UnderMaintenanceComponent } from './components/under-maintenance/under-maintenance.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    SignupPageComponent,
    NavbarComponent,
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
    FlashcardFormComponent,
    FlashcardListComponent,
    FlashcardContainerComponent,
    FlashcardGroupListComponent,
    FlashcardGroupFormComponent,
    CriarPlanejamentoComponent,
    ListaPlanejamentoComponent,
    LoadingIconComponent,
    ErrorIconComponent,
    UnderMaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialsModule,
    // NgCircleProgressModule.forRoot({})

  ],
  providers: [
    AlternaComponentesService,
    ApiService,
    SelectFlashcardGroupService,
    FlashcardListService,
    PomodoroService,
    GoogleNewsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
