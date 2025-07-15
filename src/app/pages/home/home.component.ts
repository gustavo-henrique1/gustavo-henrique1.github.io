import { AfterViewInit, Component } from '@angular/core';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faGithub,
  faBehance,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faCircle, faX } from '@fortawesome/free-solid-svg-icons';

import * as AOS from 'aos';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faBehance = faBehance;
  faFigma = faFigma;
  faDownload = faCloudArrowDown;
  faCircle = faCircle;
  faX = faX;
  darkMode = false;

  isHomeSectionVisible = false;
  private visibilityTimeout: any;

  ngAfterViewInit() {
    AOS.init();
    window.addEventListener('scroll', this.onScroll.bind(this));
    this.onScroll(); // verifica ao carregar
    this.darkMode = this.getCookie('darkMode') === 'true';
  }

  private onScroll() {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;

    const rect = homeSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    clearTimeout(this.visibilityTimeout);

    if (isVisible) {
      // espera 500ms antes de mostrar
      this.visibilityTimeout = setTimeout(() => {
        this.isHomeSectionVisible = true;
      }, 500);
    } else {
      // esconde imediatamente
      this.isHomeSectionVisible = false;
    }
  }

  getCookie(name: string): string {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return '';
  }

  downloadCv() {
    const url =
      'https://www.dropbox.com/scl/fi/ezifaj3lnbsdgfkc3sln0/curriculo-gustavo.pdf?rlkey=zlc9wljs98sbwxqj895gyf79a&st=kysvkdyb&dl=1';
    saveAs(url, '_blank');
  }
}
