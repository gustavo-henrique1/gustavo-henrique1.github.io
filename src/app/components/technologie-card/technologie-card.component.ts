import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-technologie-card',
  templateUrl: './technologie-card.component.html',
  styleUrl: './technologie-card.component.scss',
})
export class TechnologieCardComponent implements OnInit {
  @Input() icon!: IconDefinition;
  @Input() title!: String;
  @Input() description!: String;

  ngOnInit(): void {}
}
