import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-technologie-card',
  templateUrl: './technologie-card.component.html',
  styleUrl: './technologie-card.component.scss',
})
export class TechnologieCardComponent implements OnInit {
  @Input() icon!: IconDefinition;
  @Input() title!: String;
  @Input() description!: String;
  @Input() knowledgeLevel: number = 0;

  showStars: boolean = false;
  stars = new Array(5);
  isMobile: boolean = false;

  ngOnInit(): void {
    this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

  toggleStars() {
    if (this.isMobile) {
      this.showStars = true;
      setTimeout(() => {
        this.showStars = false;
      }, 5000);
    }
  }
}
