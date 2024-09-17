import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent implements OnInit {
  @Input() userHasLiked: boolean = false;
  @Input() handleClick!: (project: any) => void;
  @Input() project: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {}

  toggleLike(): void {
    if (this.userHasLiked) {
      this.removeLike();
    } else {
      this.addLike();
    }
  }

  private addLike(): void {
    this.portfolioService
      .incrementLikes(this.project.id)
      .then(() => {
        this.userHasLiked = true;
        this.updateLikes();
      })
      .catch((error) => {
        console.error('Error adding like:', error);
      });
  }

  private removeLike(): void {
    this.portfolioService
      .removeLike(this.project.id)
      .then(() => {
        this.userHasLiked = false;
        this.updateLikes();
      })
      .catch((error) => {
        console.error('Error removing like:', error);
      });
  }

  private updateLikes(): void {
    this.portfolioService.getProjectById(this.project.id).then(
      (project) => {
        this.project.likes = project.likes;
      },
      (error) => {
        console.error('Error fetching project:', error);
      }
    );
  }
}
