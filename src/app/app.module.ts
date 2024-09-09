import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SocialCardComponent } from "./components/social-card/social-card.component";
import { TechnologieCardComponent } from "./components/technologie-card/technologie-card.component";
import { ProjectCardComponent } from "./components/project-card/project-card.component";
import { MenuComponent } from "./components/menu/menu.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./pages/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    SocialCardComponent,
    TechnologieCardComponent,
    ProjectCardComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
