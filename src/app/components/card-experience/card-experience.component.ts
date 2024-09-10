import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-card-experience",
  templateUrl: "./card-experience.component.html",
  styleUrl: "./card-experience.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class CardExperienceComponent {
  @Input() imageUrl: string | undefined;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() timing!: string;
  @Input() local!: string;
  @Input() text!: string;
}
