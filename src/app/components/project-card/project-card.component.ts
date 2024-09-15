import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent implements OnInit {
  @Input() imageUrl: string | undefined;
  @Input() likes: number | undefined;
  @Input() projectId: any | undefined;
  @Input() userHasLiked: boolean = false;

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
      .incrementLikes(this.projectId)
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
      .removeLike(this.projectId)
      .then(() => {
        this.userHasLiked = false;
        this.updateLikes();
      })
      .catch((error) => {
        console.error('Error removing like:', error);
      });
  }

  private updateLikes(): void {
    this.portfolioService.getProjectById(this.projectId).then(
      (project) => {
        this.likes = project.likes;
      },
      (error) => {
        console.error('Error fetching project:', error);
      }
    );
  }
}
