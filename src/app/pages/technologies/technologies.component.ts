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
  faJenkins,
} from '@fortawesome/free-brands-svg-icons';

import {
  faAtom,
  faRotateLeft,
  faDatabase,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { faBitbucket } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
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
      icon: faCode,
      title: 'TypeScript',
      knowledgeLevel: 4,
      description: `Programação`,
    },
    {
      icon: faReact,
      title: 'React',
      knowledgeLevel: 2,
      description: `Framework`,
    },
    {
      icon: faJs,
      title: 'JavaScript',
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
      icon: faNodeJs,
      title: 'Node.js',
      knowledgeLevel: 2,
      description: `Runtime`,
    },
    {
      icon: faDatabase,
      title: 'MySQL',
      knowledgeLevel: 2,
      description: `Runtime`,
    },
    {
      icon: faBootstrap,
      title: 'Bootstrap',
      knowledgeLevel: 3,
      description: `Framework`,
    },
    {
      icon: faBitbucket,
      title: 'Bitbucket',
      knowledgeLevel: 3,
      description: `Versionamento`,
    },
    {
      icon: faGithub,
      title: 'GitHub',
      knowledgeLevel: 3,
      description: `Versionamento`,
    },
    {
      icon: faGitAlt,
      title: 'GitFlow',
      knowledgeLevel: 3,
      description: `Diretriz`,
    },
    {
      icon: faJenkins,
      title: 'Jenkins',
      knowledgeLevel: 3,
      description: `integração`,
    },
    {
      icon: faAtom,
      title: 'Atomic Design',
      knowledgeLevel: 2,
      description: `Metodologia`,
    },
    {
      icon: faRotateLeft,
      title: 'Scrum',
      knowledgeLevel: 3,
      description: `Metodologia`,
    },
    {
      icon: faFigma,
      title: 'Figma',
      knowledgeLevel: 4,
      description: `Design`,
    },
  ];
}
