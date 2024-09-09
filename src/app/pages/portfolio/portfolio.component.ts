import { Component } from "@angular/core";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrl: "./portfolio.component.scss",
})
export class PortfolioComponent {
  projects = [
    { imageUrl: "../../../assets/images/project.png" },
    { imageUrl: "../../../assets/images/project.png" },
    { imageUrl: "../../../assets/images/project.png" },
    { imageUrl: "../../../assets/images/project.png" },
    { imageUrl: "../../../assets/images/project.png" },
    { imageUrl: "../../../assets/images/project.png" },
    { imageUrl: "../../../assets/images/project.png" },
    { imageUrl: "../../../assets/images/project.png" },
  ];
}
