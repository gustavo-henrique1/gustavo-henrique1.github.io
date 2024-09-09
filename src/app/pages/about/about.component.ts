import { Component } from "@angular/core";
import { faAngular } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent {
  cards = [
    {
      icon: faAngular,
      title: "Angular",
    },
    {
      icon: faAngular,
      title: "HTML",
    },
    {
      icon: faAngular,
      title: "CSS",
    },
    {
      icon: faAngular,
      title: "SCSS",
    },
    {
      icon: faAngular,
      title: "Bootstrap",
    },
    {
      icon: faAngular,
      title: "figma",
    },
  ];
}
