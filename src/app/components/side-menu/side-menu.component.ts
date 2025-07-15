import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent implements AfterViewInit {
  @Output() darkModeChanged = new EventEmitter<boolean>();

  activeSection: string = 'home';
  darkMode = false;
  darkModeIcon = 'moon_stars';
  srcIcon = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private themeService: ThemeService
  ) {}

  ngAfterViewInit() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting && entry.target.id)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          this.activeSection = visible.target.id;
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });

    this.darkMode = this.getCookie('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', this.darkMode);

    this.togleIcons();

    this.cdr.detectChanges();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        this.activeSection = sectionId;
      }, 500);
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
    this.setCookie('darkMode', this.darkMode ? 'true' : 'false', 30);
    this.themeService.setDarkMode(this.darkMode);
    this.togleIcons();
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

  togleIcons() {
    this.darkModeIcon = this.darkMode ? 'clear_day' : 'moon_stars';
    this.srcIcon = this.darkMode
      ? 'assets/images/icon-logo-dark.png'
      : 'assets/images/icon-logo.png';
  }
}
