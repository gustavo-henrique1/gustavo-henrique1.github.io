import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() imageUrl: string | undefined;
  @Input() title!: String;
  @Input() text!: String;
  @Input() badgeOne!: String;
  @Input() badgeTwo!: String;

  faArrowRight = faArrowRight;
}
