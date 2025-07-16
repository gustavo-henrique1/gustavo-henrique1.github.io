import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrl: './about-skills.component.scss',
})
export class AboutSkillsComponent implements OnInit {
  skills = [
    { name: 'UX DESIGN' },
    { name: 'ANÁLISE' },
    { name: 'WEB DESIGN' },
    { name: 'FRONT-END' },
    { name: 'ESTRATÉGIA' },
    { name: 'UI DESIGN' },
    { name: 'INTERFACE' },
    { name: 'SCRUM' },
    { name: 'USUÁRIO' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
