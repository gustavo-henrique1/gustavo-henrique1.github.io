import { Component, HostListener } from '@angular/core';
import { saveAs } from 'file-saver';
import {
  faClose,
  faBars,
  faCloudArrowDown,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as faLightbulbRegular } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  faBars = faBars;
  faClose = faClose;
  faLightbulb = faLightbulb;
  faLightbulbRegular = faLightbulbRegular;

  faDownload = faCloudArrowDown;
  isMenuOpen = false;

  toggleIconMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbar = document.getElementById('listMenu');

    if (this.isMenuOpen) {
      menuIcon?.classList.add('d-none');
      closeIcon?.classList.remove('d-none');
      navbar?.classList.add('d-block');
    } else {
      menuIcon?.classList.remove('d-none');
      closeIcon?.classList.add('d-none');
      navbar?.classList.remove('d-block');
    }
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    this.isScrolled = window.scrollY > 5;

    let current: string = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 200;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id') as string;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  ngOnInit() {
    this.onWindowScroll();
    const darkModeCookie = this.getCookie('darkMode');
    this.darkMode = darkModeCookie === 'true';
    document.body.classList.toggle('dark-mode', this.darkMode);
  }

  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
    this.setCookie('darkMode', this.darkMode ? 'true' : 'false', 30);

    const menuLight = document.getElementById('menu-icon-light');
    const menuDark = document.getElementById('menu-icon-dark');

    if (this.darkMode) {
      menuLight?.classList.add('d-none');
      menuDark?.classList.remove('d-none');
    } else {
      menuLight?.classList.remove('d-none');
      menuDark?.classList.add('d-none');
    }
  }

  downloadCv() {
    const url =
      'https://www.dropbox.com/scl/fi/ezifaj3lnbsdgfkc3sln0/curriculo-gustavo.pdf?rlkey=zlc9wljs98sbwxqj895gyf79a&st=kysvkdyb&dl=1';
    saveAs(url, '_blank');
  }

  setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
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
}
