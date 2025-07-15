import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface NamedIcon {
  icon: IconDefinition;
  name: string;
}

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent implements OnInit {
  @Input() handleClick!: (project: any) => void;
  @Input() project!: {
    id: number;
    imageUrl: string;
    title: string;
    name: string;
    icon: string;
    icons: NamedIcon[]; // agora é array de objetos com icon + name
    description: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
