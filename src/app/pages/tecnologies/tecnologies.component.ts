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

@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrl: './tecnologies.component.scss',
})
export class TecnologiesComponent {
  specializations = [
    {
      icon: faAngular,
      title: 'Angular',
      progress: 'width: 90%',
      description: `é um framework JavaScript para desenvolver aplicações web
            escaláveis e de alto desempenho.`,
    },
    {
      icon: faJs,
      title: 'JavaScript',
      progress: 'width: 70%',
      description: `é uma linguagem de programação versátil usada para criar
            interatividade em páginas web e aplicativos.`,
    },
    {
      icon: faSass,
      title: 'SCSS',
      progress: 'width: 90%',
      description: `é uma linguagem de extensão do CSS, oferecendo recursos como
            variáveis e reutilização de estilos.`,
    },
    {
      icon: faCss3,
      title: 'CSS',
      progress: 'width: 90%',
      description: `é uma linguagem de estilo usada para definir a estilização, aparência e o
            layout de páginas web.`,
    },
    {
      icon: faBootstrap,
      title: 'Bootstrap',
      progress: 'width: 60%',
      description: `é um framework CSS que facilita a criação de sites
            responsivos com componentes pré-estilizados e flexível.`,
    },
    {
      icon: faFigma,
      title: 'Figma',
      progress: 'width: 70%',
      description: `é uma ferramenta de design colaborativo para criar interfaces
            e protótipos de forma interativa.`,
    },
    {
      icon: faGithub,
      title: 'GitHub',
      progress: 'width: 70%',
      description: `é uma plataforma de hospedagem de código-fonte que facilita
            colaboração e controle de versões.`,
    },
    {
      icon: faGithub,
      title: 'GitHub',
      progress: 'width: 70%',
      description: `é uma plataforma de hospedagem de código-fonte que facilita
            colaboração e controle de versões.`,
    },
  ];
}
