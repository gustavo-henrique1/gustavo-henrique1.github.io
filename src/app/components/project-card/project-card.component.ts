import { Component, Input } from "@angular/core";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrl: "./project-card.component.scss",
})
export class ProjectCardComponent {
  @Input() imageUrl: string | undefined;
}
