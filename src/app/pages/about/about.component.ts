import { Component } from '@angular/core';
import {
  faAngular,
  faJs,
  faSass,
  faCss3,
  faGithub,
  faFigma,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  specializations = [
    {
      icon: faAngular,
      title: 'Angular',
      progress: 'width: 90%',
      description: `O Angular é um framework JavaScript para desenvolver aplicações web
            dinâmicas, escaláveis e de alto desempenho.`,
    },
    {
      icon: faJs,
      title: 'JavaScript',
      progress: 'width: 70%',
      description: `JavaScript é uma linguagem de programação versátil usada para criar
            interatividade em páginas web e aplicativos.`,
    },
    {
      icon: faSass,
      title: 'SCSS',
      progress: 'width: 90%',
      description: `SCSS é uma linguagem de extensão do CSS, oferecendo recursos como
            variáveis, aninhamento e reutilização de estilos.`,
    },
    {
      icon: faCss3,
      title: 'CSS',
      progress: 'width: 90%',
      description: `CSS é uma linguagem de estilo usada para definir a aparência e o
            layout de páginas web.`,
    },
    {
      icon: faBootstrap,
      title: 'Bootstrap',
      progress: 'width: 60%',
      description: `Bootstrap é um framework CSS que facilita a criação de sites
            responsivos com componentes pré-estilizados e flexível.`,
    },
    {
      icon: faFigma,
      title: 'Figma',
      progress: 'width: 70%',
      description: ` Figma é uma ferramenta de design colaborativo para criar interfaces
            e protótipos de forma interativa.`,
    },
    {
      icon: faGithub,
      title: 'GitHub',
      progress: 'width: 70%',
      description: `GitHub é uma plataforma de hospedagem de código-fonte que facilita
            colaboração e controle de versões.`,
    },
  ];

  faChevronDown = faChevronDown;
  arrowVisible = true;

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    if (element.scrollTop === 0) {
      this.arrowVisible = true;
    } else {
      this.arrowVisible = false;
    }
  }
}
