import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  ngOnInit(): void {
    this.showContent('front');
  }

  showContent(content: string) {
    const frontEndElement = document.getElementById('front-end-option');
    const uiUxElement = document.getElementById('ui-ux-option');
    const experienceFront = document.getElementById('experience-front');
    const experienceUx = document.getElementById('experience-ux');

    if (frontEndElement && uiUxElement && experienceFront && experienceUx) {
      if (content == 'front') {
        frontEndElement.classList.add('active-option');
        experienceFront.classList.add('experience-visible');
        uiUxElement.classList.remove('active-option');
        experienceUx.classList.remove('experience-visible');
      } else {
        uiUxElement.classList.add('active-option');
        experienceUx.classList.add('experience-visible');
        frontEndElement.classList.remove('active-option');
        experienceFront.classList.remove('experience-visible');
      }
    }
  }
}
