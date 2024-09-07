import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrl: './social-card.component.scss',
})
export class SocialCardComponent {
  @Input() icon!: IconDefinition;
  @Input() link!: string;
}
