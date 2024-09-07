import { Component } from '@angular/core';
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faSquareJs,
  faAngular,
  faBootstrap,
  faGitAlt,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  faAngular = faAngular;
  faHtml = faHtml5;
  faCss = faCss3Alt;
  faSass = faSass;
  faSquareJs = faSquareJs;
  faBootstrap = faBootstrap;
  faGitAlt = faGitAlt;
  faGem = faGem;
  faFigma = faFigma;
}
