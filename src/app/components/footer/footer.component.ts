import { Component, OnInit } from '@angular/core';
import {
  faLinkedinIn,
  faGithub,
  faBehance,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faBehance = faBehance;
  faFigma = faFigma;

  isDarkMode = false;

  ngOnInit() {
    this.checkDarkMode();
    const observer = new MutationObserver(() => this.checkDarkMode());
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  checkDarkMode() {
    this.isDarkMode = document.body.classList.contains('dark-mode');
  }
}
