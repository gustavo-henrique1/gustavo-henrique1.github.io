import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrl: './about-skills.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition('hidden => visible', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class AboutSkillsComponent implements OnInit {
  skills = [
    { name: 'UX DESIGN', color: '#fca652' },
    { name: 'BRANDING', color: '#58b4f0' },
    { name: 'WEB DESIGN', color: '#34d399' },
    { name: 'FRAMER', color: '#a78bfa' },
    { name: 'STRATEGY', color: '#f87171' },
    { name: 'USER RESEARCH', color: '#ec4899' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
