import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "src/app/services/portfolio.service";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrl: "./portfolio.component.scss",
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];

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
        console.error("Error loading projects:", error);
      });
  }

  likeProject(id: any): void {
    if (id) {
      this.portfolioService
        .incrementLikes(id)
        .then(() => {
          console.log("Likes incremented");
        })
        .catch((error) => {
          console.error("Error liking project:", error);
        });
    } else {
      console.error("Project ID is not defined");
    }
  }
}
