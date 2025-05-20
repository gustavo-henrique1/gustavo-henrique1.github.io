import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  selectedProject: any = {};

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadProjects();
    this.selectedProject = this.projects[0];
  }

  loadProjects(): void {
    this.portfolioService
      .getProjects()
      .then((projects) => {
        this.projects = projects;

        if (this.projects.length > 0) {
          this.selectedProject = this.projects[0];
        }
      })
      .catch((error) => {
        console.error('Error loading projects:', error);
      });
  }

  selectProject(project: any) {
    this.selectedProject = project;
  }

  nextProject() {
    const currentIndex = this.projects.findIndex(
      (p) => p === this.selectedProject
    );
    const nextIndex = currentIndex + 1;
    if (nextIndex < this.projects.length) {
      this.selectProject(this.projects[nextIndex]);
    }
  }

  previousProject() {
    const currentIndex = this.projects.findIndex(
      (p) => p === this.selectedProject
    );
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      this.selectProject(this.projects[prevIndex]);
    }
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

  openModal(project: any) {
    this.selectedProject = project;
    const modalElement = document.getElementById('projectModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }
}
