import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialCardComponent } from './components/social-card/social-card.component';
import { TechnologieCardComponent } from './components/technologie-card/technologie-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardExperienceComponent } from './components/card-experience/card-experience.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { TecnologiesComponent } from './pages/tecnologies/tecnologies.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SocialCardComponent,
    TechnologieCardComponent,
    ProjectCardComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    FooterComponent,
    CardExperienceComponent,
    TecnologiesComponent,
    ProjectsComponent,
    AvatarComponent,
    SideMenuComponent,
  ],
  imports: [
    NgxTypedJsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatIconModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faStar);
  }
}
