import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-splash-screen",
  templateUrl: "./splash-screen.component.html",
  styleUrls: ["./splash-screen.component.scss"],
})
export class SplashScreenComponent implements OnInit {
  show = true;
  isDarkMode = false;

  ngOnInit(): void {
    this.checkDarkMode();
    const observer = new MutationObserver(() => this.checkDarkMode());
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setTimeout(() => {
      this.show = false;
    }, 3500);
  }

  checkDarkMode() {
    this.isDarkMode = document.body.classList.contains("dark-mode");
  }
}
