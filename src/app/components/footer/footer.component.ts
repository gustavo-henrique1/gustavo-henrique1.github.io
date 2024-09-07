import { Component } from "@angular/core";
import {
  faLinkedinIn,
  faGithub,
  faBehance,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faBehance = faBehance;
  faFigma = faFigma;
}
