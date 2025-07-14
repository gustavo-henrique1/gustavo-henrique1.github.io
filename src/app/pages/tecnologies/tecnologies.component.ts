import { Component } from '@angular/core';
import {
  faAngular,
  faJs,
  faSass,
  faCss3,
  faGithub,
  faFigma,
  faBootstrap,
  faGitAlt,
  faReact,
  faNodeJs,
  faPhp,
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
      knowledgeLevel: 4,
      description: `Framework`,
    },
    {
      icon: faReact,
      title: 'React',
      knowledgeLevel: 4,
      description: `Framework`,
    },
    {
      icon: faNodeJs,
      title: 'Node.js',
      knowledgeLevel: 4,
      description: `Runtime`,
    },
    {
      icon: faPhp,
      title: 'PHP',
      knowledgeLevel: 4,
      description: `Framework`,
    },
    {
      icon: faNodeJs,
      title: 'MySQL',
      knowledgeLevel: 4,
      description: `Runtime`,
    },
    {
      icon: faJs,
      title: 'JavaScript',
      knowledgeLevel: 4,
      description: `Programação`,
    },
    {
      icon: faJs,
      title: 'TypeScript',
      knowledgeLevel: 4,
      description: `Programação`,
    },
    {
      icon: faSass,
      title: 'SCSS',
      knowledgeLevel: 4,
      description: `Programação`,
    },
    {
      icon: faCss3,
      title: 'CSS',
      knowledgeLevel: 4,
      description: `Programação`,
    },
    {
      icon: faBootstrap,
      title: 'Bootstrap',
      knowledgeLevel: 3,
      description: `Framework`,
    },
    {
      icon: faFigma,
      title: 'Figma',
      knowledgeLevel: 4,
      description: `Framework`,
    },
    {
      icon: faGithub,
      title: 'GitHub',
      knowledgeLevel: 3,
      description: `Framework`,
    },
    {
      icon: faGitAlt,
      title: 'GitFlow',
      knowledgeLevel: 3,
      description: `Framework`,
    },
    {
      icon: faFigma,
      title: 'Figma',
      knowledgeLevel: 4,
      description: `Framework`,
    },
    {
      icon: faGithub,
      title: 'GitHub',
      knowledgeLevel: 3,
      description: `Framework`,
    },
    {
      icon: faGitAlt,
      title: 'GitFlow',
      knowledgeLevel: 3,
      description: `Framework`,
    },
  ];
}
