import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as bootstrap from 'bootstrap';
import {
  faReact,
  faNodeJs,
  faSass,
  faFigma,
  faPhp,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      id: 1,
      imageUrl: 'assets/images/saferoute-project.png',
      title: 'SafeRoute é um app para rotas seguras',
      name: 'Culture',
      icon: 'assets/images/logo-saferoute.png',
      icons: [faReact, faNodeJs, faSass, faFigma, faPhp],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
    },
    {
      id: 2,
      imageUrl: 'assets/images/saferoute-project.png',
      title: 'SafeRoute é um app para rotas seguras',
      name: 'Culture',
      icon: 'assets/images/logo-saferoute.png',
      icons: [faReact, faNodeJs, faSass, faFigma, faPhp],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
    },
    {
      id: 3,
      imageUrl: 'assets/images/saferoute-project.png',
      title: 'SafeRoute é um app para rotas seguras',
      name: 'Culture',
      icon: 'assets/images/logo-saferoute.png',
      icons: [faReact, faNodeJs, faSass, faFigma, faPhp],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
    },
    {
      id: 4,
      imageUrl: 'assets/images/saferoute-project.png',
      title: 'SafeRoute é um app para rotas seguras',
      name: 'Culture',
      icon: 'assets/images/logo-saferoute.png',
      icons: [faReact, faNodeJs, faSass, faFigma, faPhp],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
    },
  ];
  selectedProject: any = {};

  ngOnInit(): void {}

  // loadProjects(): void {
  //   this.portfolioService
  //     .getProjects()
  //     .then((projects) => {
  //       this.projects = projects;
  //       if (this.projects.length > 0) {
  //         this.selectedProject = this.projects[0];
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error loading projects:', error);
  //     });
  // }

  goToLink() {
    window.open(this.selectedProject.urlProject, '_blank');
  }

  shareProject(): void {
    const url = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: 'Confira este projeto!',
          text: 'Dê uma olhada nesse projeto incrível:',
          url: url,
        })
        .catch((error) => console.error('Erro ao compartilhar', error));
    } else {
      navigator.clipboard.writeText(url).then(
        () => {
          alert('Link copiado para a área de transferência!');
        },
        () => {
          alert('Não foi possível copiar o link.');
        }
      );
    }
  }

  openModal(project: any) {
    this.selectedProject = project;
    const modalElement = document.getElementById('projectModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }
}
