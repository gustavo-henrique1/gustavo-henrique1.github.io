import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];
  selectedProject: any = {};
  teste: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.portfolioService
      .getProjects()
      .then((projects) => {
        this.projects = projects;
      })
      .catch((error) => {
        console.error('Error loading projects:', error);
      });
  }

  openModal(project: any) {
    this.selectedProject = project;
    const modalElement = document.getElementById('projectModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }

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
}
