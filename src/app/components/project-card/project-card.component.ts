import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent implements OnInit {
  @Input() handleClick!: (project: any) => void;
  @Input() project: any;

  constructor() {}

  ngOnInit(): void {}
}
