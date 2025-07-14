import { Component, OnInit } from '@angular/core';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faGithub,
  faBehance,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faCircle, faX } from '@fortawesome/free-solid-svg-icons';

import * as AOS from 'aos';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faBehance = faBehance;
  faFigma = faFigma;
  faDownload = faCloudArrowDown;
  faCircle = faCircle;
  faX = faX;

  ngOnInit() {
    AOS.init();
  }

  downloadCv() {
    const url =
      'https://www.dropbox.com/scl/fi/ezifaj3lnbsdgfkc3sln0/curriculo-gustavo.pdf?rlkey=zlc9wljs98sbwxqj895gyf79a&st=kysvkdyb&dl=1';
    saveAs(url, '_blank');
  }
}
